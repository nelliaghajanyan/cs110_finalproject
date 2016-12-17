package com.lilit.dao.mapper;

import com.lilit.dao.model.LectureRoom;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface LectureRoomMapper {

    @Options(useGeneratedKeys = true, keyProperty = "lectureRoom.id", keyColumn = "id")
    @Insert("INSERT INTO `lecture_room`(`o_nmb`, `oh_day`, `oh_time`, `ps_nmb`, `ps_day`, `ps_time`, `lecturer_id`) " +
            "VALUES(#{lectureRoom.officeNumber}, #{lectureRoom.officeHourDay}, #{lectureRoom.officeHourTime}, #{lectureRoom.problemSolvingNumber}, " +
            "#{lectureRoom.problemSolvingDay}, #{lectureRoom.problemSolvingTime}, #{lectureRoom.lecturerId})")
    int createLectureRoom(@Param("lectureRoom") LectureRoom lectureRoom);

    @Results({
            @Result(property = "officeNumber", column = "o_nmb"),
            @Result(property = "officeHourDay", column = "oh_day"),
            @Result(property = "officeHourTime", column = "oh_time"),
            @Result(property = "ta", column = "ta"),
            @Result(property = "problemSolvingNumber", column = "ps_nmb"),
            @Result(property = "problemSolvingDay", column = "ps_day"),
            @Result(property = "problemSolvingTime", column = "ps_time"),
            @Result(property = "lecturerId", column = "lecturer_id"),
            @Result(property = "lecturerName", column = "name"),
            @Result(property = "sectionId", column = "section_id"),
            @Result(property = "sectionName", column = "section_name"),
            @Result(property = "subjectId", column = "subject_id"),
            @Result(property = "subjectName", column = "subject_name")
    })
    @Select("SELECT `lecture_room`.*, `lecturer`.*, `section`.`name` AS `section_name`, `subject`.`name` AS `subject_name` FROM `lecture_room` " +
            "JOIN `lecturer` ON `lecture_room`.`lecturer_id` = `lecturer`.`id` " +
            "JOIN `section` ON `section`.`id` = `lecturer`.`section_id` " +
            "JOIN `subject` ON `subject`.`id` = `lecturer`.`subject_id`")
    List<LectureRoom> getAllLectureRooms();

    @Update("UPDATE `lecture_room` SET `o_nmb` = #{lectureRoom.officeNumber}, `oh_day` = #{lectureRoom.officeHourDay}, `oh_time`= #{lectureRoom.officeHourTime}, " +
            "`ps_nmb`= #{lectureRoom.problemSolvingNumber}, `ps_day`= #{lectureRoom.problemSolvingDay}, `ps_time`= #{lectureRoom.problemSolvingTime}, `lecturer_id` = #{lectureRoom.lecturerId} " +
            "WHERE `id` = #{id}")
    int updateLectureRoom(@Param("id") long id, @Param("lectureRoom") LectureRoom lectureRoom);

    @Delete("DELETE FROM `lecture_room` WHERE `id` = #{id}")
    int removeLectureRoom(@Param("id") long id);


}
