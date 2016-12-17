package com.lilit.dao.model;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.DayOfWeek;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class LectureRoom {

    private long id;
    private String officeNumber;
    private DayOfWeek officeHourDay;
    private String officeHourTime;
    private String problemSolvingNumber;
    private DayOfWeek problemSolvingDay;
    private String problemSolvingTime;

    private Long lecturerId;
    private String lecturerName;
    private Boolean ta;
    private Long sectionId;
    private String sectionName;
    private Long subjectId;
    private String subjectName;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOfficeNumber() {
        return officeNumber;
    }

    public void setOfficeNumber(String officeNumber) {
        this.officeNumber = officeNumber;
    }

    public DayOfWeek getOfficeHourDay() {
        return officeHourDay;
    }

    public void setOfficeHourDay(DayOfWeek officeHourDay) {
        this.officeHourDay = officeHourDay;
    }

    public String getOfficeHourTime() {
        return officeHourTime;
    }

    public void setOfficeHourTime(String officeHourTime) {
        this.officeHourTime = officeHourTime;
    }

    public String getProblemSolvingNumber() {
        return problemSolvingNumber;
    }

    public void setProblemSolvingNumber(String problemSolvingNumber) {
        this.problemSolvingNumber = problemSolvingNumber;
    }

    public DayOfWeek getProblemSolvingDay() {
        return problemSolvingDay;
    }

    public void setProblemSolvingDay(DayOfWeek problemSolvingDay) {
        this.problemSolvingDay = problemSolvingDay;
    }

    public String getProblemSolvingTime() {
        return problemSolvingTime;
    }

    public void setProblemSolvingTime(String problemSolvingTime) {
        this.problemSolvingTime = problemSolvingTime;
    }

    public Long getLecturerId() {
        return lecturerId;
    }

    public void setLecturerId(Long lecturerId) {
        this.lecturerId = lecturerId;
    }

    public String getLecturerName() {
        return lecturerName;
    }

    public void setLecturerName(String lecturerName) {
        this.lecturerName = lecturerName;
    }

    public Long getSectionId() {
        return sectionId;
    }

    public void setSectionId(Long sectionId) {
        this.sectionId = sectionId;
    }

    public String getSectionName() {
        return sectionName;
    }

    public void setSectionName(String sectionName) {
        this.sectionName = sectionName;
    }

    public Long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public Boolean isTa() {
        return ta;
    }

    public void setTa(Boolean ta) {
        this.ta = ta;
    }
}
