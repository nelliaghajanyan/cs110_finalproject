package com.lilit.ws;

import com.lilit.dao.model.LectureRoom;
import com.lilit.service.LectureRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LectureRoomController extends BaseController {

    @Autowired
    private LectureRoomService lectureRoomService;

    @PostMapping("/rooms")
    public LectureRoom createLectureRoom(@RequestBody LectureRoom lectureRoom) {
        lectureRoomService.createLectureRoom(lectureRoom);
        return lectureRoom;
    }

    @GetMapping("/rooms")
    public List<LectureRoom> getAllLecturers() {
        return lectureRoomService.getAllLectureRooms();
    }

    @PutMapping("/rooms/{id}")
    public ResponseEntity updateLecturer(@PathVariable long id, @RequestBody LectureRoom lectureRoom) {
        lectureRoomService.updateLectureRoom(id, lectureRoom);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/rooms/{id}")
    public ResponseEntity removeLecturer(@PathVariable long id) {
        lectureRoomService.removeLectureRoom(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
