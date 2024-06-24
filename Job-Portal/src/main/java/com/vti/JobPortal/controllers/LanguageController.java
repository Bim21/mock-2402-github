package com.vti.JobPortal.controllers;

import com.vti.JobPortal.entity.Language;
import com.vti.JobPortal.services.LanguageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/languages")
public class LanguageController {
    private final LanguageService languageService;

    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @PostMapping
    public ResponseEntity<Language> createLanguage(@RequestBody Language language) {
        Language createdLanguage = languageService.createLanguage(language);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdLanguage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Language> getLanguage(@PathVariable Long id) {
        Language language = languageService.getLanguageById(id);
        return ResponseEntity.ok(language);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Language> updateLanguage(@PathVariable Long id, @RequestBody Language updatedLanguage) {
        Language updated = languageService.updateLanguage(id, updatedLanguage);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLanguage(@PathVariable Long id) {
        languageService.deleteLanguage(id);
        return ResponseEntity.noContent().build();
    }
}