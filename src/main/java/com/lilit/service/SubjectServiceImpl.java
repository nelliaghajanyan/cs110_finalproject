package com.lilit.service;

import com.lilit.dao.model.Subject;
import com.lilit.dao.mapper.SubjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    private SubjectMapper subjectMapper;

    @Override
    public void createSubject(Subject subject) {
        subjectMapper.createSubject(subject);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Subject> getAllSubjects() {
        return subjectMapper.getAllSubjects();
    }

    @Override
    public void removeSubject(long id) {
        subjectMapper.removeSubject(id);
    }

    @Override
    public void updateSubject(long id, Subject subject) {
        subjectMapper.updateSubject(id, subject);
    }
}
