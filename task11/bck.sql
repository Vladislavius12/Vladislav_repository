CREATE SCHEMA `bck` ;

CREATE TABLE `bck`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userNameId` INT NOT NULL,
  `descr` VARCHAR(250) NOT NULL,
  `createdAt` DATE NOT NULL,
  `link` VARCHAR(250) NOT NULL,
  `vendorId` INT NOT NULL,
  `photoLink` VARCHAR(250) NULL,
  `hashTags` VARCHAR(150) NOT NULL,
  `discount` INT NOT NULL,
  `validUntil` DATE NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `bck`.`vendors` (
  `id` INT NOT NULL,
  `vendorName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `bck`.`reviews` (
  `userId` INT NOT NULL,
  `productId` INT NOT NULL,
  `review` VARCHAR(150) NULL,
  `rating` INT NULL,
  PRIMARY KEY (`userId`, `productId`));

CREATE TABLE `bck`.`users` (
  `id` INT NOT NULL,
  `userName` VARCHAR(45) NOT NULL,
  `userRole` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


  
ALTER TABLE `bck`.`products` 
ADD INDEX `fk_users_idx` (`userNameId` ASC) VISIBLE,
ADD INDEX `fk_vendors_idx` (`vendorId` ASC) VISIBLE;
;

ALTER TABLE `bck`.`products` 
ADD CONSTRAINT `fk_users`
  FOREIGN KEY (`userNameId`)
  REFERENCES `bck`.`users` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_vendors`
  FOREIGN KEY (`vendorId`)
  REFERENCES `bck`.`vendors` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION;
  
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('1', 'Bayerische Motoren Werke AG');
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('2', 'Mercedes-Benz');
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('3', 'Geely Automobile');
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('4', 'Geely Automobile');
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('5', 'Mercedes-Benz');
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('6', 'Tesla');
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('7', 'Audi');
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('8', 'Toyota');
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('9', 'Nissan');
INSERT INTO `bck`.`vendors` (`id`, `vendorName`) VALUES ('10', 'Tesla');

INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('1', 'Vlad', 'Admin');
INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('2', 'Man', 'Customer');
INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('3', 'Pavel', 'Customer');
INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('4', 'Roma', 'Customer');
INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('5', 'Vadim', 'Admin');
INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('6', 'Stepan', 'Admin');
INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('7', 'Kirill', 'Customer');
INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('8', 'Vitiya', 'Customer');
INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('9', 'Tolek', 'Admin');
INSERT INTO `bck`.`users` (`id`, `userName`, `userRole`) VALUES ('10', 'Sensei', 'Admin');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('1', '1', 'BMW X5', '2020-04-14', 'https://www.bmw.by/ru/', '1', 'https://www.bmw.by/content/dam/bmw/common/all-models/x-series/x5/2018/at-a-glance/bmw-g05-x5-onepager-stage-sp-xxl.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1569992884125.jpg', '["BMW", New_style, Sport, OffRoad]', '15', '2022-04-14');
INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('2', '2', 'Mersedes', '2021-02-15', 'https://www.mercedes-benz.by/ru/desktop/home.html', '2', 'https://oir.mobi/uploads/posts/2019-12/1575860099_17-34.jpg', '[Mersedes, New_style, Sport, Modern]', '10', '2021-04-01');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('3', '3', 'Geely', '2021-03-10', 'https://geely.atlantm.by/?utm_source=yandex&utm_medium=cpc&utm_content=8827790032&utm_term=geely%20джили&utm_campaign=Geely_Brand_Yandex_Search&yclid=2362249578115786592', '1', 'https://quest-auto.ru/img/Geely-Emgrand-X7-14.jpg', '[Geely, loan, Sale50, pensioner_auto]', '15', '2021-04-10');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('4', '4', 'Geely Emgrand GT 2020', '2021-01-15', 'https://cenyavto.com/dzhili-emgrand-gt-2020/', '3', 'https://i.cenyavto.com/2020/02/c81e728d9d4c2f636f067f89cc14862c-6-1068x932.jpeg', '[Geely, loan, Sport, pensioner_auto]', '12', '2021-06-25');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('5', '5', 'Mersedes', '2021-03-20', 'https://mbbelarus.by/s-class/', '5', 'https://i.ytimg.com/vi/8gOZ2YpoOAM/maxresdefault.jpg', '[Mersedes, New_style, S-class, Modern]', '12', '2021-06-29');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('6', '6', 'Mercedes-Benz Sprinter', '2020-03-15', 'https://www.mercedes-benz.by/vans/ru/sprinter/panel-van', '4', 'https://luxurylaunches.com/wp-content/uploads/2015/02/luxury-senzati-jet-sprinter-van-10.jpg', '[Mersedes, New_style, Sprinter-class, Commerce]', '85', '2022-06-01');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('7', '7', 'Tesla Model S', '2021-03-01', 'https://www.tesla.com/models', '6', 'https://tvoe-avto.com/wp-content/uploads/Red-Tesla-Model-S-with-Unplugged-Performance-kit.jpg', '["ecology", Tesla, New_style, Sport, Modern]', '10', '2048-08-08');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('8', '8', 'Tesla Model 3', '2021-01-22', 'https://www.tesla.com/model3', '9', 'https://unpluggedperformance.com/wp-content/uploads/2020/10/Unplugged-Performance-Tesla-Model-3-Blue-Brushed-UP-03-Wheels-CCM-Brakes-1200x800.jpg', '[ecology, Tesla, New_style, Sport, Modern]', '33', '[ecology, Tesla, New_style, Sport, Modern]');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('9', '9', 'Cybertruck', '2021-02-22', 'https://www.tesla.com/cybertruck', '8', 'https://1.bp.blogspot.com/-kYuuWTQ6kFo/XhdH_FO2hlI/AAAAAAAAEmQ/fyaFYbZAiagyaUbglJTOQ3oitfDedcrMQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Tesla-Cybertruck-unveiling%2Bdfb.jpg', '[Ecology, Tesla, Cybe_style, Super_Sport, Neo_Modern]', '44', '2022-12-12');
INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('10', '10', 'Tesla Model X', '2021-01-01', 'https://www.tesla.com/modelx', '10', 'https://i.blogs.es/ab8d32/tesla-model-x-motorpasion-prueba-1/1366_2000.jpg', '[ecology, Tesla, New_style, Sport, Modern]', '30', '2021-04-01');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('11', '8', 'Tesla Y', '2020-03-15', 'https://www.tesla.com/modely', '6', 'https://i.simpalsmedia.com/point.md/news/thumbnails/large/e9df695089d5776487fe193d74140af2.jpg', '[ecology, Tesla, New_style, Sport, Modern]', '25', '2021-09-09');

INSERT INTO `bck`.`products` (`id`, `userNameId`, `descr`, `createdAt`, `link`, `vendorId`, `photoLink`, `hashTags`, `discount`, `validUntil`) VALUES ('12', '10', 'Audi e-tron', '2021-03-11', 'https://www.audi.by/by/web/ru/models/tron/audi-e-tron.html', '6', 'https://family-auto.ru/wp-content/uploads/2020/06/audi-e-tron.jpg', '[ecology, Tesla, New_style, Sport, Modern]', '25', '2025-04-11');

INSERT INTO `bck`.`products` (`descr`, `vendorId`, `photoLink`) VALUES ('', '', '');

INSERT INTO `bck`.`reviews` (`userId`, `productId`, `review`, `rating`) VALUES ('1', '1', '[Wow!]', '4.4');
INSERT INTO `bck`.`reviews` (`userId`, `productId`, `rating`) VALUES ('2', '5', '3.8');
INSERT INTO `bck`.`reviews` (`userId`, `productId`, `review`, `rating`) VALUES ('5', '3', '[Cool!,Amazing!]', '4.5');
INSERT INTO `bck`.`reviews` (`userId`, `productId`, `rating`) VALUES ('3', '2', '3');
INSERT INTO `bck`.`reviews` (`userId`, `productId`, `review`, `rating`) VALUES ('4', '4', '[Nice!,Top!]', '4.4');
INSERT INTO `bck`.`reviews` (`userId`, `productId`, `rating`) VALUES ('1', '4', '4');
INSERT INTO `bck`.`reviews` (`userId`, `productId`, `rating`) VALUES ('8', '7', '4');
INSERT INTO `bck`.`reviews` (`userId`, `productId`, `review`, `rating`) VALUES ('7', '10', '[good]', '4.4');
INSERT INTO `bck`.`reviews` (`userId`, `productId`, `rating`) VALUES ('9', '8', '4.4');
INSERT INTO `bck`.`reviews` (`userId`, `productId`, `rating`) VALUES ('10', '9', '3.9');
