DROP DATABASE IF EXISTS codegig_db;
CREATE DATABASE codegig_db;

USE codegig_db;

CREATE TABLE `gigs` (
`id` INT AUTO_INCREMENT NOT NULL, 
`title` VARCHAR(200) NOT NULL, 
`technologies` VARCHAR(200) NOT NULL, 
`budget` INT default 0, 
`description` VARCHAR(500) NULL,
`contact_email` VARCHAR(50) NULL,
`updatedAt` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
`createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,

PRIMARY KEY ( `id` ) 
);
