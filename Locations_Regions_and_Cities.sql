-- anywere
INSERT INTO Organization_Database2.Regions
VALUES (default, 'Remote');

SELECT Regions.Region_ID INTO @RemoteID 
FROM Organization_Database2.Regions
WHERE Regions.Region_NAME like '%Remote%' 
limit 1; 

INSERT INTO Organization_Database2.Cities
VALUES ('Remote Dummy', 'MA', '00000');

INSERT INTO Organization_Database2.Regions_Cities
VALUES (@RemoteID, 'Remote Dummy');

-- Breaking Grounds Café 
INSERT INTO Organization_Database2.Regions
VALUES (default, 'Breaking Grounds Café');

INSERT INTO Organization_Database2.Cities
VALUES ('Peabody', 'MA', 01906);


-- INSERT INTO Organization_Database2.Regions_has_Cities
-- VALUES ('1', 'Peabody', 01906);

-- Work with out limits: Berkshire, Franklin, Hampden, Hampshire, Middlesex and Worcester counties. 
INSERT INTO Organization_Database2.Regions
VALUES (default, 'Berkshire County');

SELECT Regions.Region_ID INTO @BerkshireID 
FROM Organization_Database2.Regions
WHERE Regions.Region_NAME like '%Berkshire County%' 
limit 1; 

INSERT INTO Organization_Database2.Cities
VALUES ('North Adams', 'MA', '01247'),
('Pittsfield', 'MA', '01201'),
('Adams', 'MA', '01220'),
('Becket', 'MA', '01223'),
('Cheshire', 'MA', '01225'),
('Clarksburg', 'MA', '01247'),
('Egremont', 'MA', '01230'),
('Egremont', 'MA', '01258'),
('Florida', 'MA', '01247'),
('Florida', 'MA', '01343'),
('Great Barrington', 'MA', '01230'),
('Hancock (Lanesborough)', 'MA', '01237'), ('Hancock (Williamstown)', 'MA', '01267'), ('Hancock (Pittsfield)', 'MA', '01201'),
('Hinsdale', 'MA', '01235'),
('Lanesborough', 'MA', '01237'),
('Lee', 'MA', '01238'), ('Lee', 'MA', '01264'),
('Lenox', 'MA', '01240'),
('Monterey', 'MA', '01245'),
('Mount Washington', 'MA', '01258'),
('New Ashford', 'MA', '01237'),
('New Marlborough', 'MA', '01244'),
('Otis', 'MA', '01253'),
('Peru', 'MA', '01235'),
('Sandisfield', 'MA', '01255'),
('Richmond', 'MA', '01254'),
('Savoy', 'MA', '01256'),
('Sheffield', 'MA', '01257'),
('Stockbridge', 'MA', '01262'),
('Tyringham', 'MA', '01264'),
('Washington', 'MA', '01223'),
('West Stockbridge', 'MA', '01266'),
('Williamstown', 'MA', '01267'),
('Windsor', 'MA', '01270'),
('Housatonic', 'MA', '01236');

INSERT INTO Organization_Database2.Regions_Cities
VALUES (@BerkshireID, 'North Adams'),
(@BerkshireID, 'Pittsfield'),
(@BerkshireID, 'Adams'),
(@BerkshireID, 'Becket'),
(@BerkshireID, 'Cheshire'),
(@BerkshireID, 'Clarksburg'),
(@BerkshireID, 'Egremont'),
(@BerkshireID, 'Florida'),
(@BerkshireID, 'Great Barrington'),
(@BerkshireID, 'Hancock (Lanesborough)'), (@BerkshireID, 'Hancock (Williamstown)'), (@BerkshireID, 'Hancock (Pittsfield)'),
(@BerkshireID, 'Lanesborough'),
(@BerkshireID, 'Lee'),
(@BerkshireID, 'Lenox'),
(@BerkshireID, 'Monterey'),
(@BerkshireID, 'Mount Washington'),
(@BerkshireID, 'New Ashford'),
(@BerkshireID, 'New Marlborough'),
(@BerkshireID, 'Otis'),
(@BerkshireID, 'Sandisfield'),
(@BerkshireID, 'Richmond'),
(@BerkshireID, 'Savoy'),
(@BerkshireID, 'Sheffield'),
(@BerkshireID, 'Stockbridge'),
(@BerkshireID, 'Tyringham'),
(@BerkshireID, 'Washington'),
(@BerkshireID, 'West Stockbridge'),
(@BerkshireID, 'Williamstown'),
(@BerkshireID, 'Windsor'),
(@BerkshireID, 'Housatonic');

INSERT INTO Organization_Database2.Regions
VALUES (default, 'Franklin County');

SELECT Regions.Region_ID INTO @FranklinID 
FROM Organization_Database2.Regions
WHERE Regions.Region_NAME like '%Franklin County%' 
limit 1; 

INSERT INTO Organization_Database2.Cities
VALUES ('Greenfield', 'MA', '01301'),
('Ashfield', 'MA', '01330'),
('Bernardston', 'MA', '01337'),
('Buckland', 'MA', '01338'),
('Charlemont', 'MA', '01339'),
('Colrain', 'MA', '01340'),
('Conway', 'MA', '01341'),
('Deerfield', 'MA', '01342'),
('Erving', 'MA', '01344'),
('Gill', 'MA', '01354'),
('Hawley', 'MA', '01339'),
('Heath', 'MA', '01346'),
('Leverett', 'MA', '01054'),
('Leyden', 'MA', '01301'), ('Leyden', 'MA', '01337'),
('Monroe', 'MA', '01350'),
('Montague', 'MA', '01351'),
('Montague', 'MA', '01376'),
('New Salem', 'MA', '01355'),
('Northfield', 'MA', '01360'),
('Orange', 'MA', '01364'), ('Orange', 'MA', '01355'), ('Orange', 'MA', '01378'),
('Rowe', 'MA', '01367'),
('Shelburne', 'MA', '01370'),
('Shutesbury', 'MA', '01072'),
('Sunderland', 'MA', '01375'),
('Warwick', 'MA', '01378'), ('Wendell', 'MA', '01379'),
('Whately', 'MA', '01093'),
('Millers Falls', 'MA', '01349'),
('Northfield', 'MA', '01354'),
('South Deerfield', 'MA', '01373'),
('Turners Falls', 'MA', '01349'), ('Turners Falls', 'MA', '01376');

INSERT INTO Organization_Database2.Regions_Cities
VALUES (@FranklinID , 'Greenfield'),
(@FranklinID , 'Ashfield'),
(@FranklinID , 'Bernardston'),
(@FranklinID , 'Buckland'),
(@FranklinID , 'Charlemont'),
(@FranklinID , 'Colrain'),
(@FranklinID , 'Conway'),
(@FranklinID , 'Deerfield'),
(@FranklinID , 'Erving'),
(@FranklinID , 'Gill'),
(@FranklinID , 'Hawley'),
(@FranklinID , 'Heath'),
(@FranklinID , 'Leverett'),
(@FranklinID , 'Leyden'),
(@FranklinID , 'Monroe'),
(@FranklinID , 'Montague'),
(@FranklinID , 'New Salem'),
(@FranklinID , 'Northfield'),
(@FranklinID , 'Orange'),
(@FranklinID , 'Rowe'),
(@FranklinID , 'Shelburne'),
(@FranklinID , 'Shutesbury'),
(@FranklinID , 'Sunderland'),
(@FranklinID , 'Warwick'),
(@FranklinID , 'Wendell'),
(@FranklinID , 'Whately'),
(@FranklinID , 'Millers Falls'),
(@FranklinID , 'South Deerfield'),
(@FranklinID , 'Turners Falls');

-- Hampden
INSERT INTO Organization_Database2.Regions
VALUES (default, 'Hampden County');

SELECT Regions.Region_ID INTO @HampdenID 
FROM Organization_Database2.Regions
WHERE Regions.Region_NAME like '%Hampden County%' 
limit 1; 

INSERT INTO Organization_Database2.Cities
VALUES ('Agawam', 'MA', '01001'),
('Chicopee', 'MA', '01013'), ('Chicopee', 'MA', '01020'), ('Chicopee', 'MA', '01021'), ('Chicopee', 'MA', '01022'),
('Holyoke', 'MA', '01040'), ('Holyoke', 'MA', '01041'),
('Palmer', 'MA', '01069'),
('Springfield', 'MA', '01101'), ('Springfield', 'MA', '01103'), ('Springfield', 'MA', '01104'), ('Springfield', 'MA', '01105'),
('Springfield', 'MA', '01107'), ('Springfield', 'MA', '01108'), ('Springfield', 'MA', '01109'),
('Springfield', 'MA', '01118'), ('Springfield', 'MA', '01119'),
('Springfield', 'MA', '01128'), ('Springfield', 'MA', '01129'),
('Springfield', 'MA', '01151'),
('West Springfield', 'MA', '01089'),
('Westfield', 'MA', '01085'), ('Westfield', 'MA', '01086'),
('Blandford', 'MA', '01008'),
('Brimfield', 'MA', '01010'),
('Chester', 'MA', '01011'),
('East Longmeadow', 'MA', '01028'),
('Granville', 'MA', '01034'),
('Hampden', 'MA', '01036'),
('Holland', 'MA', '01521'),
('Longmeadow', 'MA', '01106'), ('Longmeadow', 'MA', '01116'),
('Ludlow', 'MA', '01056'),
('Monson', 'MA', '01057'),
('Montgomery', 'MA', '01085'),
('Russell', 'MA', '01071'), ('Russell', 'MA', '01097'),
('Southwick', 'MA', '01077'),
('Tolland', 'MA', '01034'),
('Wales', 'MA', '01081'),
('Wilbraham', 'MA', '01095'),
('Monson Center', 'MA', '01057');

INSERT INTO Organization_Database2.Regions_Cities
VALUES (@HampdenID, 'Agawam'),
(@HampdenID, 'Chicopee'),
(@HampdenID, 'Holyoke'),
(@HampdenID, 'Palmer'),
(@HampdenID, 'Springfield'),
(@HampdenID, 'West Springfield'),
(@HampdenID, 'Westfield'),
(@HampdenID, 'Blandford'),
(@HampdenID, 'Brimfield'),
(@HampdenID,'Chester'),
(@HampdenID,'East Longmeadow'),
(@HampdenID,'Granville'),
(@HampdenID,'Hampden'),
(@HampdenID,'Holland'),
(@HampdenID,'Longmeadow'),
(@HampdenID,'Ludlow'),
(@HampdenID,'Monson'),
(@HampdenID,'Montgomery'),
(@HampdenID,'Russell'),
(@HampdenID,'Southwick'),
(@HampdenID,'Tolland'),
(@HampdenID,'Wales'),
(@HampdenID,'Wilbraham'),
(@HampdenID,'Monson Center');

-- Hampshire
INSERT INTO Organization_Database2.Regions
VALUES (default, 'Hampshire County');

SELECT Regions.Region_ID INTO @HampshireID 
FROM Organization_Database2.Regions
WHERE Regions.Region_NAME like '%Hampshire County%' 
limit 1; 

INSERT INTO Organization_Database2.Cities
VALUES ('Northampton', 'MA', '01060'),
('Easthampton', 'MA', '01027'),
('Amherst', 'MA', '01002'), ('Amherst', 'MA', '01003'), ('Amherst', 'MA', '01004'), ('Amherst', 'MA', '01059'),
('Belchertown', 'MA', '01007'),
('Chesterfield', 'MA', '01012'),
('Cummington', 'MA', '01026'),
('Goshen', 'MA', '01032'),
('Granby', 'MA', '01033'),
('Hadley', 'MA', '01035'),
('Hatfield', 'MA', '01038'), ('Hatfield', 'MA', '01088'), ('Hatfield', 'MA', '01066'),
('Huntington', 'MA', '01050'),
('Middlefield', 'MA', '01243'),
('Pelham', 'MA', '01002'),
('Plainfield', 'MA', '01070'), ('Plainfield', 'MA', '01026'),
('South Hadley', 'MA', '01075'),
('Southampton', 'MA', '01073'),
('Ware', 'MA', '01082'),
('Westhampton', 'MA', '01027'),
('Williamsburg', 'MA', '01039'), ('Williamsburg', 'MA', '01096'),
('Worthington', 'MA', '01098');

INSERT INTO Organization_Database2.Regions_Cities
VALUES (@HampshireID, 'Northampton'),
(@HampshireID, 'Easthampton'),
(@HampshireID, 'Amherst'),
(@HampshireID,'Belchertown'),
(@HampshireID,'Chesterfield'),
(@HampshireID,'Cummington'),
(@HampshireID,'Goshen'),
(@HampshireID,'Granby'),
(@HampshireID,'Hadley'),
(@HampshireID,'Hatfield'),
(@HampshireID,'Huntington'),
(@HampshireID,'Middlefield'),
(@HampshireID,'Pelham'),
(@HampshireID,'Plainfield'),
(@HampshireID,'South Hadley'),
(@HampshireID,'Southampton'),
(@HampshireID,'Ware'),
(@HampshireID,'Westhampton'),
(@HampshireID,'Williamsburg'),
(@HampshireID,'Worthington');


INSERT INTO Organization_Database2.Regions
VALUES (default, 'Middlesex County');

SELECT Regions.Region_ID INTO @MiddlesexID 
FROM Organization_Database2.Regions
WHERE Regions.Region_NAME like '%Middlesex County%' 
limit 1; 

INSERT INTO Organization_Database2.Regions
VALUES (default, 'Suffolk County');

SELECT Regions.Region_ID INTO @SuffolkID 
FROM Organization_Database2.Regions
WHERE Regions.Region_NAME like '%Suffolk County%' 
limit 1; 

INSERT INTO Organization_Database2.Cities
VALUES ('Boston', 'MA', '02108'),
('Boston', 'MA', '02109'),
('Boston', 'MA', '02110'), ('Boston', 'MA', '02111'),
('Boston', 'MA', '02112'), ('Boston', 'MA', '02113'),
('Boston', 'MA', '02114'), ('Boston', 'MA', '02115'),
('Boston', 'MA', '02116'), ('Boston', 'MA', '02117'),
('Boston', 'MA', '02118'), ('Boston', 'MA', '02119'),
('Boston', 'MA', '02120'), ('Boston', 'MA', '02121'),
('Boston', 'MA', '02122'), ('Boston', 'MA', '02123'),
('Boston', 'MA', '02124'), ('Boston', 'MA', '02125'),
('Boston', 'MA', '02126'), ('Boston', 'MA', '02127'),
('Boston', 'MA', '02128'), ('Boston', 'MA', '02129'),
('Boston', 'MA', '02130'), ('Boston', 'MA', '02131'),
('Boston', 'MA', '02132'), ('Boston', 'MA', '02133'),
('Boston', 'MA', '02134'), ('Boston', 'MA', '02135'),
('Boston', 'MA', '02136'), ('Boston', 'MA', '02137'),
('Boston', 'MA', '02163'), 
('Boston', 'MA', '02193'),
('Boston', 'MA', '02199'),
('Boston', 'MA', '02201'),
('Boston', 'MA', '02203'), ('Boston', 'MA', '02204'), ('Boston', 'MA', '02205'), ('Boston', 'MA', '02206'),
('Boston', 'MA', '02210'), ('Boston', 'MA', '02211'), ('Boston', 'MA', '02212'),
('Boston', 'MA', '02215'),
('Boston', 'MA', '02217'),
('Boston', 'MA', '02222'),
('Boston', 'MA', '02226'),
('Boston', 'MA', '02228'),
('Boston', 'MA', '02241'),
('Boston', 'MA', '02266'),
('Boston', 'MA', '02283'), ('Boston', 'MA', '02284'),
('Boston', 'MA', '02293'), ('Boston', 'MA', '02295'), ('Boston', 'MA', '02297'), ('Boston', 'MA', '02298'),
('Boston', 'MA', '02467'),
('Chelsea', 'MA', '02150'),
('Revere', 'MA', '02151'),
('Winthrop', 'MA', '02152');

INSERT INTO Organization_Database2.Regions_Cities
VALUES (@SuffolkID , 'Boston'),
(@SuffolkID , 'Chelsea'),
(@SuffolkID , 'Revere'),
(@SuffolkID , 'Winthrop');


SELECT * FROM Organization_Database2.Regions; 
SELECT * FROM Organization_Database2.Cities; 
SELECT * FROM Organization_Database2.Regions_has_Programs; 