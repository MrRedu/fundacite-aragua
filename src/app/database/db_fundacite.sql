SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE db_fundacite;
USE db_fundacite;

CREATE TABLE `tbl_roles` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name_rol` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de roles.';

INSERT INTO `tbl_roles` (id_rol, name_rol) VALUES
(1, 'Administrador'),
(2, 'Desarrollador'),
(3, 'General');

CREATE TABLE `tbl_users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_rol` int(11) NOT NULL DEFAULT 3,

  `names_user` varchar(32) NOT NULL,
  `lastnames_user` varchar(32) NOT NULL,
  `cedula_user` int(12),
  `birthdate_user` varchar(32),
  `phone_user` varchar(32),
  `email_user` varchar(48) NOT NULL,
  `city_user` varchar(255),
  `address_user` varchar(255),
  `university_user` varchar(255),
  `career_user` varchar(255),
  
  `password_user` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de usuarios.';

ALTER TABLE `tbl_users`
  ADD CONSTRAINT `tbl_users_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `tbl_roles` (`id_rol`);

COMMIT;