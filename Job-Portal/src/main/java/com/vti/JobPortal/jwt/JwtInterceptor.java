package com.vti.JobPortal.jwt;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Date;
import java.util.List;

@Component
public class JwtInterceptor implements HandlerInterceptor {
    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String TOKEN_PREFIX = "Bearer ";
    private static volatile JwtInterceptor instance;
    // Private constructor to prevent instantiation from outside the class
    public JwtInterceptor() {
    }
    // Method to get the singleton instance
    public static JwtInterceptor getInstance() {
        if (instance == null) {
            synchronized (JwtInterceptor.class) {
                if (instance == null) {
                    instance = new JwtInterceptor();
                }
            }
        }
        return instance;
    }
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = extractTokenFromRequest(request);
        if (token == null || token.isEmpty() || !isValidToken(token)) {
            response.sendError(HttpStatus.UNAUTHORIZED.value(), "Missing or invalid token");
            return false;
        }
        try {
            Claims claims = JWTUtility.getInstance().parseToken(token);
            // You can perform additional validation or processing with the claims here

            // Check if the user has the required permission
            if (!hasPermission(claims, request)) {
                response.sendError(HttpStatus.FORBIDDEN.value(), "Insufficient permission");
                return false;
            }

            // Add the claims to the request attributes to make them accessible to other components
            request.setAttribute("claims", claims);
            return true;
        } catch (Exception e) {
            response.sendError(HttpStatus.UNAUTHORIZED.value(), "Invalid token");
            return false;
        }

    }
    private boolean hasPermission(Claims claims, HttpServletRequest request) {
        // Retrieve the required permission for the requested endpoint
        String requiredPermission = getRequiredPermission(request);

        // Check if the user's authorities contain the required permission
        List<String> authorities = (List<String>) claims.get("authorities");
        return authorities != null && authorities.contains(requiredPermission);
    }
    private String getRequiredPermission(HttpServletRequest request) {
        String url = request.getRequestURI();

        if (url.startsWith("/api/auth")) {
            return null; // No permission required for authentication
        } else if (url.startsWith("/api/applicants")) {
            return "APPLICANT"; // Applicants require "APPLICANT" permission
        } else if (url.startsWith("/api/educations")) {
            return null; // No permission required for educations
        } else if (url.startsWith("/api/employers")) {
            return "EMPLOYER"; // Employers require "EMPLOYER" permission
        } else if (url.startsWith("/api/jobs")) {
            return null; // No permission required for jobs
        } else {
            return "ADMIN"; // Default to "ADMIN" permission for other endpoints
        }
    }

    public String extractTokenFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (bearerToken != null && bearerToken.startsWith(TOKEN_PREFIX)) {
            return bearerToken.substring(TOKEN_PREFIX.length());
        }
        return null;
    }

    public  String extractUsername(String token) {
        try {
            Claims claims =  JWTUtility.getInstance().parseToken(token);
            return  claims.getSubject();
        } catch (Exception e) {
            return null; // Token is invalid
        }
    }

    public  boolean isValidToken(String token) {
        try {
            Claims claims =  JWTUtility.getInstance().parseToken(token);
            Date expirationDate = claims.getExpiration();
            String email = claims.getSubject();
            Date currentDate = new Date();
            return (expirationDate == null || !expirationDate.before(currentDate)) &&
                    JwtTokenStore.getInstance().isTokenPresent(email, token.replace("Bearer ", "")); // Token has expired
            // Token is valid and not expired
        } catch (Exception e) {
            return false; // Token is invalid
        }
    }
}
