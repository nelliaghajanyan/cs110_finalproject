package com.lilit.ws;

import com.lilit.dao.model.Section;
import com.lilit.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SectionController extends BaseController {

    @Autowired
    private SectionService sectionService;

    @PostMapping("/sections")
    public Section createSection(@RequestBody Section section) {
        sectionService.createSection(section);
        return section;
    }

    @GetMapping("/sections")
    public List<Section> getAllSections() {
        return sectionService.getAllSections();
    }

    @PutMapping("/sections/{id}")
    public ResponseEntity updateSection(@PathVariable long id, @RequestBody Section section) {
        sectionService.updateSection(id, section);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/sections/{id}")
    public ResponseEntity removeSection(@PathVariable long id) {
        sectionService.removeSection(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
