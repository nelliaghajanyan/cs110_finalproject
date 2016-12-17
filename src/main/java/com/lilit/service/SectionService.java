package com.lilit.service;

import com.lilit.dao.model.Section;

import java.util.List;

public interface SectionService {

    void createSection(Section section);

    List<Section> getAllSections();

    void removeSection(long id);

    void updateSection(long id, Section section);


}
