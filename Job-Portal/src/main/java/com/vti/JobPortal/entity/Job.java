package com.vti.JobPortal.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

    @Document(collection = "jobs")
    public class Job {
        @Id
        private String id;
        private String title;
        private String employerId;
        private String description;
        private String[] requirements;
        private String location;
        private String position;
        private String specialize;
        private String salary;
        private Date postedDate;
        private Date expiredDate;
        private int views;
        private String[] applicants;
        private int status;

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getEmployerId() {
            return employerId;
        }

        public void setEmployerId(String employerId) {
            this.employerId = employerId;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getSpecialize() {
            return specialize;
        }

        public void setSpecialize(String specialize) {
            this.specialize = specialize;
        }

        public String[] getRequirements() {
            return requirements;
        }

        public void setRequirements(String[] requirements) {
            this.requirements = requirements;
        }

        public String getLocation() {
            return location;
        }

        public String getPosition() {
            return position;
        }

        public void setPosition(String position) {
            this.position = position;
        }

        public void setLocation(String location) {
            this.location = location;
        }

        public String getSalary() {
            return salary;
        }

        public void setSalary(String salary) {
            this.salary = salary;
        }

        public Date getPostedDate() {
            return postedDate;
        }

        public void setPostedDate(Date postedDate) {
            this.postedDate = postedDate;
        }

        public Date getExpiredDate() {
            return expiredDate;
        }

        public void setExpiredDate(Date expiredDate) {
            this.expiredDate = expiredDate;
        }

        public int getViews() {
            return views;
        }

        public void setViews(int views) {
            this.views = views;
        }

        public String[] getApplicants() {
            return applicants;
        }

        public void setApplicants(String[] applicants) {
            this.applicants = applicants;
        }

        public int getStatus() {
            return status;
        }

        public void setStatus(int status) {
            this.status = status;
        }
    }

