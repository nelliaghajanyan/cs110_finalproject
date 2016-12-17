package com.lilit.service;

import com.lilit.dao.model.Lecturer;

import java.util.List;

public interface LecturerService {

    void createLecturer(Lecturer lecturer);

    List<Lecturer> getAllLecturers();

    void removeLecturer(long id);

    void updateLecturer(long id, Lecturer lecturer);
}
