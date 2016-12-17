package com.lilit.ws;

import com.lilit.dao.model.Lecturer;
import com.lilit.service.LecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LecturerController extends BaseController {

    @Autowired
    private LecturerService lecturerService;

    @PostMapping("/lecturers")
    public Lecturer createLecturer(@RequestBody Lecturer lecturer) {
        lecturerService.createLecturer(lecturer);
        return lecturer;
    }

    @GetMapping("/lecturers")
    public List<Lecturer> getAllLecturers() {
        return lecturerService.getAllLecturers();
    }

    @PutMapping("/lecturers/{id}")
    public ResponseEntity updateLecturer(@PathVariable long id, @RequestBody Lecturer lecturer) {
        lecturerService.updateLecturer(id, lecturer);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/lecturers/{id}")
    public ResponseEntity removeLecturer(@PathVariable long id) {
        lecturerService.removeLecturer(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
