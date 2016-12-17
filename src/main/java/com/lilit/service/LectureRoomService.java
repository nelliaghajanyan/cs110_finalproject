package com.lilit.service;

import com.lilit.dao.model.LectureRoom;

import java.util.List;

public interface LectureRoomService {

    void createLectureRoom(LectureRoom lectureRoom);

    List<LectureRoom> getAllLectureRooms();

    void removeLectureRoom(long id);

    void updateLectureRoom(long id, LectureRoom lectureRoom);
}
