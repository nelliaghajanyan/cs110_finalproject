package com.lilit.dao.mapper;

import com.lilit.dao.model.Lecturer;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface LecturerMapper {

    @Options(useGeneratedKeys = true, keyProperty = "lecturer.id", keyColumn = "id")
    @Insert("INSERT INTO `lecturer`(`name`, `ta`, `subject_id`, `section_id`) VALUES(#{lecturer.name}, #{lecturer.ta}, #{lecturer.subjectId}, #{lecturer.sectionId})")
    int createLecturer(@Param("lecturer") Lecturer lecturer);

    @Results({
            @Result(property = "sectionId", column = "section_id"),
            @Result(property = "sectionName", column = "section_name"),
            @Result(property = "subjectId", column = "subject_id"),
            @Result(property = "subjectName", column = "subject_name")
    })
    @Select("SELECT `lecturer`.*, `section`.`name` AS `section_name`, `subject`.`name` AS `subject_name` FROM `lecturer` JOIN `section` ON `lecturer`.`section_id` = `section`.`id` " +
            "JOIN `subject` ON `lecturer`.`subject_id` = `subject`.`id`")
    List<Lecturer> getAllLecturers();

    @Update("UPDATE `lecturer` SET `name` = #{lecturer.name}, `ta` = #{lecturer.ta}, `section_id` = #{lecturer.sectionId}, `subject_id` = #{lecturer.subjectId} WHERE `id` = #{id}")
    int updateLecturer(@Param("id") long id, @Param("lecturer") Lecturer lecturer);

    @Delete("DELETE FROM `lecturer` WHERE `id` = #{id}")
    int removeLecturer(@Param("id") long id);

}
