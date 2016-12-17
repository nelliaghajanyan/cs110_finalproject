package com.lilit.dao.mapper;

import com.lilit.dao.model.Subject;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface SubjectMapper {

    @Options(useGeneratedKeys = true, keyProperty = "subject.id", keyColumn = "id")
    @Insert("INSERT INTO `subject`(`name`) VALUES(#{subject.name})")
    int createSubject(@Param("subject") Subject subject);

    @Select("SELECT * FROM `subject`")
    List<Subject> getAllSubjects();

    @Update("UPDATE `subject` SET `name` = #{subject.name} WHERE `id` = #{id}")
    int updateSubject(@Param("id") long id, @Param("subject") Subject subject);

    @Delete("DELETE FROM `subject` WHERE `id` = #{id}")
    int removeSubject(@Param("id") long id);
}
