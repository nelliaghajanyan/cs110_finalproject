package com.lilit.service;

import com.lilit.dao.model.Subject;

import java.util.List;

public interface SubjectService {

    void createSubject(Subject subject);

    List<Subject> getAllSubjects();

    void removeSubject(long id);

    void updateSubject(long id, Subject subject);
}
