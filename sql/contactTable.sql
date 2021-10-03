-- AANE
INSERT INTO Organization_Database2.Contacts
VALUES ('Main', DEFAULT, 'info@aane.org',DEFAULT,'617-393-3824',2); -- main
-- Online “Open” AANE Book Club for Adults
INSERT INTO Organization_Database2.Contacts
VALUES ("Online “Open” AANE Book Club for Adults", DEFAULT, 'events@aane.org', DEFAULT, '617-393-3824',2);
Select Contacts.Contact_ID INTO @AANEBookClubC FROM Contacts WHERE Contacts.Title like "%AANE Book Club for%";
Select Programs.Program_ID INTO @AANEBookClubP FROM Programs WHERE Programs.Program_NAME like "%AANE Book Club for%" LIMIT 1;
INSERT INTO Programs_Contacts
VALUES (@AANEBookClubP,@AANEBookClubC);


-- Pathlight
INSERT INTO Organization_Database2.Contacts
VALUES ('Springfield', DEFAULT, 'info@pathlightgroup.org',DEFAULT,'413-732-0531',3); -- main
INSERT INTO Organization_Database2.Contacts
VALUES ('Greenfield', DEFAULT, 'info@pathlightgroup.org',DEFAULT,'413-774-3495',3);
INSERT INTO Organization_Database2.Contacts
VALUES ('Pittsfield', DEFAULT, 'info@pathlightgroup.org',DEFAULT,'413-443-4780',3);
INSERT INTO Organization_Database2.Contacts
VALUES ('Hadley', DEFAULT, 'info@pathlightgroup.org',DEFAULT,'413-585-8010',3);
INSERT INTO Organization_Database2.Contacts
VALUES ('Easthampton', DEFAULT, 'info@pathlightgroup.org',DEFAULT,'413-529-2428',3);

-- Work with out limits 
INSERT INTO Organization_Database2.Contacts
VALUES ('Main', DEFAULT, DEFAULT,'333 South Street Shrewsbury, MA 01545','877-937-9675',4); -- main

-- Seven Hills  
INSERT INTO Organization_Database2.Contacts
VALUES ('Person-Centered Support in a Family Environment', DEFAULT, 'afc@sevenhills.org','799 West Boylston St., Suite 2, Worcester, MA 01606','508-796-1868',5);
-- Person-Centered Support in a Family Environment -> (to be made)
INSERT INTO Organization_Database2.Contacts
VALUES ('Sharon Goldberg Vice President ', DEFAULT, 'sgoldberg@sevenhills.org',DEFAULT,'508-983-1336',5);
-- main

-- Northeast Arc 
INSERT INTO Organization_Database2.Contacts
VALUES ('Main', DEFAULT, 'info@ne-arc.org','1 Southside Road Danvers, MA 01923','978-762-4878',6);
-- main
INSERT INTO Organization_Database2.Contacts
VALUES ('Heritage Shredding', DEFAULT, DEFAULT,'27 Garden Street, Unit 4, Danvers, MA 01923','978-531-0666',6);
-- Northeast Arc Heritage Shredding -> 61
INSERT INTO Programs_Contacts
VALUES (11,61);

INSERT INTO Organization_Database2.Contacts
VALUES ('Kathy Marques', DEFAULT, 'kmarques@ne-arc.org',default,'978-624-3058',6);
-- Transition and School Supports -> 62
INSERT INTO Programs_Contacts
VALUES (12,62);

-- Autism Alliance 
INSERT INTO Organization_Database2.Contacts
VALUES ('Main', DEFAULT, 'AutismAlliance@Advocates.org','1881 Worcester Road, Suite 100A Framingham, MA 01701 ','978-624-3058',7);
-- main
INSERT INTO Organization_Database2.Contacts
VALUES ('Karaoke Night', DEFAULT, 'FamilyServices@Advocates.org',default,'508-628-6801',7);
-- Karaoke Night -> 59
INSERT INTO Programs_Contacts
VALUES (14,59);
INSERT INTO Organization_Database2.Contacts
VALUES ("Kwadwo-Asare Kusi, Advocates Family Support Specialist", DEFAULT, 'FamilyServices@Advocates.org', default, '508-628-6765',15);
-- Outdoor Mini Golf - > 58
INSERT INTO Programs_Contacts
VALUES (15,58);

-- TILL
INSERT INTO Organization_Database2.Contacts
VALUES ('Main', DEFAULT, 'info@tillinc.org','20 Eastbrook Road Suite 201 Dedham, MA 02026','781-302-4600',1);
-- main
INSERT INTO Organization_Database2.Contacts
VALUES ('Paula Aiesi Director of Community Connections', DEFAULT, 'paula.aiesi@tillinc.org',DEFAULT,'781-302-4608',1);
-- Community Connections -> main
INSERT INTO Organization_Database2.Contacts
VALUES ('Dale Belcher', DEFAULT, 'Dale.Belcher@tillinc.org',DEFAULT,'781-302-4608',1);
-- Education Through Travel (ETT) -> 6
-- Springboard Social Club -> 7
INSERT INTO Programs_Contacts
VALUES (18,6);
INSERT INTO Programs_Contacts
VALUES (18,7);
INSERT INTO Organization_Database2.Contacts
VALUES ('Find a Job', DEFAULT, DEFAULT,'TILL, Inc. 20 Eastbrook Road Dedham, MA 02026-2056 Attention HR',DEFAULT,1);
-- Find a Job -> 8
INSERT INTO Programs_Contacts
VALUES (8,8);
INSERT INTO Organization_Database2.Contacts
VALUES ('Peter Van Voorhis', DEFAULT, 'day.services@tillinc.org',DEFAULT,'781-302-4814',1);
-- TILL’s CARF-Accredited Day programs  -> 9
INSERT INTO Programs_Contacts
VALUES (20,9);

INSERT INTO Organization_Database2.Contacts
VALUES ('Vocational Training', DEFAULT, 'vocational.services@tillinc.org',DEFAULT,'781-302-4609',1);
-- Vocational Training -> 10
-- Contact Information for Vocational Services -> 10
INSERT INTO Programs_Contacts
VALUES (21,10);
INSERT INTO Organization_Database2.Contacts
VALUES ('Sandra Cummins', DEFAULT, 'sandy.cummins@tillinc.org',DEFAULT,'781-302-4624',1);
-- Residential Services -> 12
INSERT INTO Programs_Contacts
VALUES (22,12);
INSERT INTO Organization_Database2.Contacts
VALUES ('Alan White', DEFAULT, 'alan.white@tillinc.org',DEFAULT,'781-302-4695',1);
-- Respite services -> 13
-- Self-Directed Services  -> 14
INSERT INTO Programs_Contacts
VALUES (23,13);
INSERT INTO Programs_Contacts
VALUES (23,14);

-- Lifeworks
INSERT INTO Organization_Database2.Contacts
VALUES ('Main1', DEFAULT,  DEFAULT, '789 Clapboardtree Street, Westwood, MA 02090 ','781-762-4001',8);
INSERT INTO Organization_Database2.Contacts
VALUES ('Main2', DEFAULT,  DEFAULT, '789 Clapboardtree Street, Westwood, MA 02090 ','781-320-9778',8);
INSERT INTO Organization_Database2.Contacts
VALUES ('FAMILY SUPPORT PROGRAM',DEFAULT,'familysupport@lifeworksarc.org', DEFAULT,DEFAULT,8);
-- FAMILY SUPPORT PROGRAM - > 17
INSERT INTO Programs_Contacts
VALUES (26,17);
INSERT INTO Organization_Database2.Contacts
VALUES ('FAMILY SUPPORT PROGRAM',DEFAULT, 'adultfamilycare@lifeworksarc.org', DEFAULT,DEFAULT,8);
-- FAMILY SUPPORT PROGRAM - > 18
INSERT INTO Programs_Contacts
VALUES (27,18);
INSERT INTO Organization_Database2.Contacts
VALUES ('AUTISM SUPPORT CENTER',DEFAULT, 'autismsupportcenter@lifeworksarc.org', DEFAULT,DEFAULT,8);
-- AUTISM SUPPORT CENTER -> 19
INSERT INTO Programs_Contacts
VALUES (28,19);
INSERT INTO Organization_Database2.Contacts
VALUES ('SOCIAL / RECREATIONAL PROGRAMS',DEFAULT, 'recreation@lifeworksarc.org', DEFAULT,DEFAULT,8);
-- SOCIAL / RECREATIONAL PROGRAMS -> 20
INSERT INTO Programs_Contacts
VALUES (29,20);
INSERT INTO Organization_Database2.Contacts
VALUES ('ALEC FIRST RESPONDER TRAINING',DEFAULT, 'ALEC@lifeworksarc.org', DEFAULT,DEFAULT,8);
-- ALEC FIRST RESPONDER -> 21
INSERT INTO Programs_Contacts
VALUES (30,21);
INSERT INTO Organization_Database2.Contacts
VALUES ('HARBOR COUNSELING',DEFAULT, 'harborcounseling@lifeworksarc.org', DEFAULT,DEFAULT,8);
-- HARBOR COUNSELING -> 22
INSERT INTO Programs_Contacts
VALUES (31,22);
INSERT INTO Organization_Database2.Contacts
VALUES ('Diane DeMeritt',DEFAULT, 'ddemeritt@lifeworksarc.org', DEFAULT,781-762-4001,8);
-- TRIPS AROUND THE WORLD -> 23
-- SUPER NURSES TO THE RESCUE -> 24
-- EXERCISE WITH DEB -> 25
-- NAME THAT TUNE -> 26
INSERT INTO Programs_Contacts
VALUES (32,23);
INSERT INTO Programs_Contacts
VALUES (32,24);
INSERT INTO Programs_Contacts
VALUES (32,25);
INSERT INTO Programs_Contacts
VALUES (32,26);

-- Community Autism Resources
INSERT INTO Organization_Database2.Contacts
VALUES ('Swansea Office', DEFAULT, DEFAULT, '33 James Reynolds Rd., Unit C Swansea, MA 02777','508-379-0371',9);
-- main
INSERT INTO Organization_Database2.Contacts
VALUES ('Bridgewater Office', DEFAULT, DEFAULT, '120 Main St., 2nd Floor Bridgewater, MA 02324','508-379-0371',9);
-- main

-- Autism Resource central
INSERT INTO Organization_Database2.Contacts
VALUES ('ASD Adult Training Series', DEFAULT, 'dcrossley@hmea.org', DEFAULT, '508-298-1611',16);
-- ASD Adult Training Series 35
INSERT INTO Programs_Contacts
VALUES (35,35);

-- Metrowest Center For Independent Living 
INSERT INTO Organization_Database2.Contacts
VALUES ('Main', DEFAULT, default, '280 Irving Street Framingham, MA 01702', '508-875-7853',10);

-- Metro West Regional Transit Authority 
INSERT INTO Organization_Database2.Contacts
VALUES ('Main', DEFAULT, default, default, '508-820-4650',11);

-- Worcester public transportation 
INSERT INTO Organization_Database2.Contacts
VALUES ('Main', DEFAULT, default, 'Customer Service Center at 60 Foster Street in Worcester', '508-752-9283',12);

-- MBTA The Ride 
INSERT INTO Organization_Database2.Contacts
VALUES ('toll-free', DEFAULT, 'theride@mbta.com', DEFAULT, '800-392-6100',13);
INSERT INTO Organization_Database2.Contacts
VALUES ('voice, relay', DEFAULT, 'theride@mbta.com', DEFAULT,'617-222-5123',13);

-- Aspire Teen &Adult Programs: Massachusetts General  Hospital
INSERT INTO Organization_Database2.Contacts
VALUES ('Lexington (Main Office)', DEFAULT, 'mghaspire@partners.org', 'Lurie Center 1 Maguire Road Lexington, MA 02421', '781-860-1900', 14),
('Newton', DEFAULT, 'mghaspire@partners.org', 'Newton Lower Falls Community Center 545 Grove Street Newton Lower Falls, MA 02462', '781-860-1900', 14),
('Charlestown', DEFAULT, 'mghaspire@partners.org', 'Charlestown Boys and Girls Club 15 Green Street Charlestown, MA 02129', '781-860-1900', 14),
('Cambridge', DEFAULT, 'mghaspire@partners.org', 'Lesley University 29 Everett Street Cambridge, MA 02138', '781-860-1900', 14),
('Boston', DEFAULT, 'mghaspire@partners.org', 'Wentworth Institute of Technology 550 Huntington Avenue Boston, MA 02115', '781-860-1900', 14);

-- You're with Us! 
INSERT INTO Organization_Database2.Contacts
VALUES ("You're with Us!", DEFAULT, 'michael@yourewithus.org', 'PO Box 938 Methuen, MA 01844', '978-587-6663',15);


-- Programs Contacts Table
SELECT * FROM Organization_Database2.Programs_Contacts;
SELECT * FROM Programs;
SELECT * FROM Contacts;

SELECT Programs.Program_NAME, Contacts.Title FROM Programs_Contacts
join Programs
on Programs.Program_ID=Programs_Contacts.program_ID
join Contacts
on Contacts.Contact_ID=Programs_Contacts.Contact_ID;
