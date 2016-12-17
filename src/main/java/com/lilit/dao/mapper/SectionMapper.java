package com.lilit.dao.mapper;

import com.lilit.dao.model.Section;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface SectionMapper {

    @Options(useGeneratedKeys = true, keyProperty = "section.id", keyColumn = "id")
    @Insert("INSERT INTO `section`(`name`) VALUES(#{section.name})")
    int createSection(@Param("section") Section section);

    @Select("SELECT * FROM `section`")
    List<Section> getAllSections();

    @Update("UPDATE `section` SET `name` = #{section.name} WHERE `id` = #{id}")
    int updateSection(@Param("id") long id, @Param("section") Section section);

    @Delete("DELETE FROM `section` WHERE `id` = #{id}")
    int removeSection(@Param("id") long id);

}
