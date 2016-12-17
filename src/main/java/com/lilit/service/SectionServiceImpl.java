package com.lilit.service;

import com.lilit.dao.model.Section;
import com.lilit.dao.mapper.SectionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SectionServiceImpl implements SectionService {

    @Autowired
    private SectionMapper sectionMapper;

    @Override
    public void createSection(Section section) {
        sectionMapper.createSection(section);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Section> getAllSections() {
        return sectionMapper.getAllSections();
    }

    @Override
    public void removeSection(long id) {
        sectionMapper.removeSection(id);
    }

    @Override
    public void updateSection(long id, Section section) {
        sectionMapper.updateSection(id, section);
    }
}
