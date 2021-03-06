-- SET FOREIGN_KEY_CHECKS = 0;
--
-- DROP TABLE IF EXISTS `subject`;
-- CREATE TABLE `subject` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE INDEX `subject_name_UNIQUE` (`name`)
-- ) ENGINE=InnoDB;
--
-- DROP TABLE IF EXISTS `section`;
-- CREATE TABLE `section` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE INDEX `section_name_UNIQUE` (`name`)
-- ) ENGINE=InnoDB;
--
-- DROP TABLE IF EXISTS `lecturer`;
-- CREATE TABLE `lecturer` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(45) NOT NULL,
--   `ta` TINYINT DEFAULT 0,
--   `subject_id` INT NOT NULL,
--   `section_id` INT NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE INDEX `lecturer_name_UNIQUE` (`name`, `subject_id`, `section_id`),
--   CONSTRAINT `subject_id_fk` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`),
--   CONSTRAINT `section_id_fk` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`)
-- ) ENGINE=InnoDB;
--
-- DROP TABLE IF EXISTS `lecture_room`;
-- CREATE TABLE `lecture_room` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `o_nmb` VARCHAR(45) NOT NULL,
--   `oh_day` enum('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY') NOT NULL,
--   `oh_time` VARCHAR(45) NOT NULL,
--   `ps_nmb` VARCHAR(45),
--   `ps_day` enum('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'),
--   `ps_time` VARCHAR(45),
--   `lecturer_id` INT NOT NULL,
--   PRIMARY KEY (`id`),
--   CONSTRAINT `lecturer_id_fk` FOREIGN KEY (`lecturer_id`) REFERENCES `lecturer` (`id`)
-- ) ENGINE=InnoDB;
--
-- INSERT INTO subject(`id`, `name`) VALUES(1, 'CS');
-- INSERT INTO subject(`id`, `name`) VALUES(2, 'Discrete');
-- INSERT INTO subject(`id`, `name`) VALUES(3, 'Calculus');
--
-- INSERT INTO section(`id`, `name`) VALUES(1, 'A');
-- INSERT INTO section(`id`, `name`) VALUES(2, 'B');
-- INSERT INTO section(`id`, `name`) VALUES(3, 'C');
--
-- INSERT INTO lecturer(`id`, `name`, `ta`, `subject_id`, `section_id`) VALUES(1, 'Hayk', 0, 1, 1);
-- INSERT INTO lecturer(`id`, `name`, `ta`, `subject_id`, `section_id`) VALUES(2, 'Karen', 0, 2, 2);
-- INSERT INTO lecturer(`id`, `name`, `ta`, `subject_id`, `section_id`) VALUES(3, 'Shogher', 1, 2, 1);
--
-- INSERT INTO lecture_room(`id`, `o_nmb`, `oh_day`, `oh_time`, `lecturer_id`) VALUES(1, 'w321', 'TUESDAY', '13:00', 1);
-- INSERT INTO lecture_room(`id`, `o_nmb`, `oh_day`, `oh_time`, `lecturer_id`, `ps_nmb`, `ps_day`, `ps_time`) VALUES(2, 'w321', 'TUESDAY', '13:00', 3, 'b123', 'FRIDAY', '11:00');
--
-- SET FOREIGN_KEY_CHECKS = 1;