package com.lilit.service;

import com.lilit.dao.model.Lecturer;
import com.lilit.dao.mapper.LecturerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LecturerServiceImpl implements LecturerService {

    @Autowired
    private LecturerMapper lecturerMapper;

    @Override
    public void createLecturer(Lecturer lecturer) {
        lecturerMapper.createLecturer(lecturer);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Lecturer> getAllLecturers() {
        return lecturerMapper.getAllLecturers();
    }

    @Override
    public void removeLecturer(long id) {
        lecturerMapper.removeLecturer(id);
    }

    @Override
    public void updateLecturer(long id, Lecturer lecturer) {
        lecturerMapper.updateLecturer(id, lecturer);
    }
}
