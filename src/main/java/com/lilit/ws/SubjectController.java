package com.lilit.ws;

import com.lilit.dao.model.Subject;
import com.lilit.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SubjectController extends BaseController {

    @Autowired
    private SubjectService subjectService;

    @PostMapping("/subjects")
    public Subject createSection(@RequestBody Subject subject) {
        subjectService.createSubject(subject);
        return subject;
    }

    @GetMapping("/subjects")
    public List<Subject> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

    @PutMapping("/subjects/{id}")
    public ResponseEntity updateSubjects(@PathVariable long id, @RequestBody Subject subject) {
        subjectService.updateSubject(id, subject);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/subjects/{id}")
    public ResponseEntity removeSubjects(@PathVariable long id) {
        subjectService.removeSubject(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}