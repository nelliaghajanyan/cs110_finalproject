package com.lilit.service;

import com.lilit.dao.model.LectureRoom;
import com.lilit.dao.mapper.LectureRoomMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LectureRoomImpl implements LectureRoomService {

    @Autowired
    private LectureRoomMapper lectureRoomMapper;

    @Override
    public void createLectureRoom(LectureRoom lectureRoom) {
        lectureRoomMapper.createLectureRoom(lectureRoom);
    }

    @Transactional(readOnly = true)
    @Override
    public List<LectureRoom> getAllLectureRooms() {
        return lectureRoomMapper.getAllLectureRooms();
    }

    @Override
    public void removeLectureRoom(long id) {
        lectureRoomMapper.removeLectureRoom(id);
    }

    @Override
    public void updateLectureRoom(long id, LectureRoom lectureRoom) {
        lectureRoomMapper.updateLectureRoom(id, lectureRoom);
    }
}
