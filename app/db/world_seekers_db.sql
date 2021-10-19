DROP DATABASE IF EXISTS WorldSeekers;
CREATE DATABASE WorldSeekers;
USE WorldSeekers;


-- Tabla de Productos
DROP TABLE IF EXISTS `units`;
CREATE TABLE `units` (
  `id` mediumint(6) unsigned NOT NULL AUTO_INCREMENT,
  `type` int(4) DEFAULT NULL,
  `element` int(5) DEFAULT NULL,
  `level` int(60) DEFAULT NULL,
  `price` int(100) DEFAULT NULL,
  `on_sale` boolean DEFAULT false,
  `name` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=innoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `units` (`type`,`element`, `level`,`price`, `on_sale` ,`name`) VALUES (0, 0, 10, 25, false, 0), (1, 1, 11, 70, true, 1), (2, 2, 12, 45, true, 2), (3, 3, 13, 55, false, 3), (4, 4, 14, 47, false, 4), (4, 5, 10, 35, true, 5), (3, 2, 9, 5, true, 5),(1, 4, 16, 56, false, 4);



-- Tabla de usuarios 
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` mediumint(6) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(350) NULL DEFAULT NULL,
  `profile_pic` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=innoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`email`,`username`,`password`, `description`, `profile_pic`) VALUES ("author@email.com", "Test Username", "$2b$10$OwR11K7I6uZSJBau5Ndrxe22hPQqLVZVSI1Ox3hqru3UE3avOxPwS","", "user2.jpg"), ("author2@email.com", "Test Username2", "$2b$10$pJccLp2nRTsEph6XfVTynuvMEZnqSf7CYDFOS7Yu7TbXkSLZew2kK","", "create_image-1629822576560.jpg");

-- Tabla colecciones. Esta es una tabla intermedia que relaciona a X cantidad de nfts que pertencen (en ownership) a un usuario.


DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions` (
  `tx_id` mediumint(6) unsigned NOT NULL AUTO_INCREMENT,
  `buyer_id` mediumint(6) unsigned NOT NULL,
  `seller_id` mediumint(6) unsigned NOT NULL,
  `unit_id` mediumint(6) unsigned NOT NULL,
  `tx_price` int(100) NOT NULL,
  `tx_occurr_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tx_id`),
  KEY `buyer_tx_idfk` (`buyer_id`),
  KEY `seller_tx_idfk` (`seller_id`),
  KEY `unit_tx_idfk` (`unit_id`),
  CONSTRAINT `buyer_tx_idfk` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE ,
  CONSTRAINT `seller_tx_idfk` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE ,
  CONSTRAINT `unit_tx_idfk` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=innoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `transactions` (`buyer_id`,`seller_id`,`unit_id`, `tx_price`,`tx_occurr_at`) VALUES (1,2,3, 25,"2021-10-19T10:18:33.000Z"), (2,1,2, 35,"2021-10-12T10:18:33.000Z"), (2,1,4, 35,"2021-9-19T10:18:33.000Z");





DROP TABLE IF EXISTS `users_inventory`;
CREATE TABLE `inventory` (
  `inventory_id` mediumint(6) unsigned NOT NULL AUTO_INCREMENT,
  `owner_id` mediumint(6) unsigned NOT NULL,
  `unit_id` mediumint(6) unsigned NOT NULL,
  KEY `owner_unit_inventory_idfk` (`owner_id`),
  KEY `unit_owner_inventory_idfk` (`unit_id`),
  CONSTRAINT `owner_unit_inventory_idfk` FOREIGN KEY (`owner_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE ,
  CONSTRAINT `unit_owner_inventory_idfk` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (`inventory_id`)
) ENGINE=innoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `inventory` (`owner_id`, `unit_id`) VALUES (1,2),(1,3),(2,1),(1,4);

-- Tabla colecciones. Esta es una tabla intermedia que relaciona a X cantidad de nfts que pertencen (en ownership) a un usuario.








