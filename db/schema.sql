USE codegig_db;

CREATE TABLE `gigs` (
`id` INT AUTO_INCREMENT NOT NULL, 
`title` VARCHAR(200) NOT NULL, 
`technologies` VARCHAR(200) NOT NULL, 
`budget` INT default 0, 
`description` VARCHAR(500) NULL,
`contact email` VARCHAR(50) NULL,
`updated_at` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
`created_at` TIMESTAMP NOT NULL,

PRIMARY KEY ( `id` ) 
);
