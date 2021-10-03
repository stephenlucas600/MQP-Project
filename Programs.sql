SELECT Regions.Region_ID INTO @RemoteID 
FROM Organization_Database2.Regions
WHERE Regions.Region_NAME like '%Remote%' 
limit 1; 

SELECT Regions.Region_ID INTO @SuffolkID 
FROM Organization_Database2.Regions
WHERE Regions.Region_NAME like '%Suffolk County%' 
limit 1; 

SELECT * FROM Programs;

UPDATE  Organization_Database2.Programs
SET Provider = 'private'
WHERE Organization_Database2.Programs.Program_ID = 1
OR Organization_Database2.Programs.Program_ID = 2
OR Organization_Database2.Programs.Program_ID = 3;
	
-- AANE
INSERT INTO Organization_Database2.Programs
VALUES (1, 'LifeMAP Coaching', DEFAULT, 'https://www.aane.org/resources/adults/lifemap-coaching/', DEFAULT, 2);
INSERT INTO Organization_Database2.Programs
VALUES (2, 'Neurodiverse Couples Coaching', DEFAULT, 'https://www.aane.org/resources/adults/neurodiverse-couples-coaching/', DEFAULT, 2),
(3, 'Massachusetts Housing Consultations', DEFAULT, 'https://www.aane.org/resources/adults/massachusetts-housing-consultations/', DEFAULT, 2),
(4, 'Artist Collaborative', DEFAULT, 'https://www.aane.org/resources/adults/artist-collaborative/', DEFAULT, 2),
(5, 'Adults – Social Activities and Events', DEFAULT, 'https://www.aane.org/resources/adults/social-groups/', DEFAULT, 2);

INSERT INTO Organization_Database2.Regions_has_Programs
VALUES  (@RemoteID,2);


-- TILL 
INSERT INTO Organization_Database2.Programs
VALUES (6, 'Education Through Travel (ETT)', DEFAULT, 'https://www.tillinc.org/social-connections/education-through-travel', DEFAULT, 1),
(7, 'Springboard Social Club', DEFAULT, 'https://www.tillinc.org/springboard-social-club', DEFAULT, 1),
(8, 'Find a Job', DEFAULT, 'https://www.tillinc.org/careers/find-job', DEFAULT, 1),
(9, 'TILL’s CARF-Accredited Day programs', DEFAULT, 'https://www.tillinc.org/services/day-vocational-services', DEFAULT, 1),
(10, 'Vocational Training', DEFAULT, 'https://www.tillinc.org/services/vocational-training', DEFAULT, 1),
(11, 'Individualized Supports', DEFAULT, 'https://www.tillinc.org/services/individual-support', DEFAULT, 1),
(12, 'Residential Services', DEFAULT, 'https://www.tillinc.org/services/residential-services', DEFAULT, 1),
(13, 'Respite Services', DEFAULT, 'https://www.tillinc.org/services/respite-services', DEFAULT, 1),
(14, 'Self-Directed Services', DEFAULT, 'https://www.tillinc.org/services/self-directed-services', DEFAULT, 1);

-- Lifeworks 
INSERT INTO Organization_Database2.Programs
VALUES (15, 'Connections', DEFAULT, 'https://lifeworksarc.org/service/connections/', DEFAULT, 8),
(17, 'Family Supoort Program', DEFAULT, 'https://lifeworksarc.org/service/family-support-program/', DEFAULT, 8),
(18, 'Adult Family Care', DEFAULT, 'https://lifeworksarc.org/service/adult-family-care/', DEFAULT, 8),
(19, 'Autism Support Center', DEFAULT, 'https://lifeworksarc.org/service/autism-support-center/', DEFAULT, 8),
(20, 'Social / Recreational Programs', DEFAULT, 'https://lifeworksarc.org/service/social-recreational-programs/', DEFAULT, 8),
(21, 'Alec First Responder Training', DEFAULT, 'https://lifeworksarc.org/service/alec-first-responder-training/', DEFAULT, 8),
(22, 'Harbor Counseling', DEFAULT, 'https://lifeworksarc.org/service/harbor-counseling/', DEFAULT, 8),
(23, 'Trips Around The World', DEFAULT, 'https://lifeworksarc.org/event/trips-around-the-world-4/', DEFAULT, 8),
(24, 'Super Nurses To The Rescue', DEFAULT, 'https://lifeworksarc.org/event/super-nurses-to-the-rescue-4/', DEFAULT, 8),
(25, 'Exercise With Deb', DEFAULT, 'https://lifeworksarc.org/event/exercise-with-deb-3/', DEFAULT, 8),
(26, 'Name That Tune', DEFAULT, 'https://lifeworksarc.org/event/name-that-tune-3/', DEFAULT, 8);

-- Community Autism Resources 
INSERT INTO Organization_Database2.Programs
VALUES (27, 'Clinics for Adults - Resume Writing', DEFAULT, 'http://community-autism-resources.com/services/clinic/', DEFAULT, 9),
(28, 'Clinics for Adults - Interview Skills', DEFAULT, 'http://community-autism-resources.com/services/clinic/', DEFAULT, 9),
(29, 'Clinics for Adults - ISP Review', DEFAULT, 'http://community-autism-resources.com/services/clinic/', DEFAULT, 9),
(30, 'UNDERSTANDING SPECIAL EDUCATION LAW AND OBTAINING SERVICES', DEFAULT, 'http://community-autism-resources.com/services/courses/', DEFAULT, 9),
(31, 'WORKING TOGETHER: PARENT AND PROFESSIONAL COLLABORATION', DEFAULT, 'http://community-autism-resources.com/services/courses/', DEFAULT, 9),
(32, 'UNDERSTANDING AND USING VISUAL SYSTEMS WITH INDIVIDUALS WITH ASD (2.5 HOURS)', DEFAULT, 'http://community-autism-resources.com/services/courses/', DEFAULT, 9),
(33, 'LEARNING ABOUT COMMUNICATION AND SOCIAL STRENGTHS AND CHALLENGES IN AUTISM SPECTRUM DISORDERS (2 HOURS)', DEFAULT, 'http://community-autism-resources.com/services/courses/', DEFAULT,9),
(34, 'LEARNING ABOUT SENSORY AND BEHAVIORAL STRENGTHS AND CHALLENGES IN INDIVIDUALS WITH ASD (2 HOURS)', DEFAULT, 'http://community-autism-resources.com/services/courses/', DEFAULT, 9);

-- Autism Resource central 
INSERT INTO Organization_Database2.Programs
VALUES (35, 'ASD Adult Training Series', DEFAULT, 'https://www.autismresourcecentral.org/trainings-and-classes/', DEFAULT, 16),
(36,'Virtual Triva & Board Games', DEFAULT, DEFAULT, DEFAULT, 16),
(37,'Legos with Cid', DEFAULT, DEFAULT, DEFAULT, 16),
(38,'Minecraft Gaming Group (for all ages)', DEFAULT, DEFAULT, DEFAULT, 16),
(39,'Paint Night for Teens', DEFAULT, 'https://www.autismresourcecentral.org/event/paint-night-for-teens-adults-parents-april-27-2021/', DEFAULT, 16);

-- Metrowest Center For Independent Living 
INSERT INTO Organization_Database2.Programs
VALUES (40, 'Independent  living Skills', DEFAULT, DEFAULT, DEFAULT, 10),
(41, 'Advocacy', DEFAULT, DEFAULT, DEFAULT, 10),
(42, 'Peer support', DEFAULT, DEFAULT, DEFAULT, 10),
(43, 'Housing Search', DEFAULT, DEFAULT, DEFAULT, 10),
(44, 'Service Area', DEFAULT, DEFAULT, DEFAULT, 10);

-- Aspire Teen &Adult Programs: Massachusetts General  Hospital   
INSERT INTO Organization_Database2.Programs
VALUES (45, 'Adult Guild Chronicles', DEFAULT, 'https://www.massgeneral.org/children/aspire/teen-adult/guild-chronicles', DEFAULT, 14),
(46, 'College Group', DEFAULT, 'https://www.massgeneral.org/children/aspire/teen-adult/college-group', DEFAULT, 14),
(47, 'Cooking', DEFAULT, 'https://www.massgeneral.org/children/aspire/teen-adult/cooking-for-children', DEFAULT, 14),
(48, 'Games Group', DEFAULT, 'https://www.massgeneral.org/children/aspire/teen-adult/games-group', DEFAULT,14),
(49, 'Film Club', DEFAULT, 'https://www.massgeneral.org/children/aspire/teen-adult/film-club', DEFAULT, 14),
(50, 'Outings', DEFAULT, 'https://www.massgeneral.org/children/aspire/teen-adult/outings', DEFAULT,14),
(51, 'Relationships', DEFAULT, 'https://www.massgeneral.org/children/aspire/teen-adult/relationships', DEFAULT, 14),
(52, 'Aspire Teen and Adult Social Group', DEFAULT, 'https://www.massgeneral.org/children/aspire/teen-adult/teen-and-adult-social-group', DEFAULT, 14),
(53, "Women's Group", DEFAULT, 'https://www.massgeneral.org/children/aspire/teen-adult/womens-group', DEFAULT, 14),
(54, 'MGH Aspire Works Program', DEFAULT, 'https://www.massgeneral.org/children/aspire/aspire-works/', DEFAULT, 14),
(55, "MGH Aspire Internship Program", DEFAULT, 'https://www.massgeneral.org/children/aspire/aspire-works/internship-program ', DEFAULT, 14),
(56, "Neurodiversity Consultation and Trainings", DEFAULT, 'https://www.massgeneral.org/children/aspire/aspire-works/neurodiversity-consultation-and-trainings', DEFAULT, 14),
(57, "Employer Partners", DEFAULT, 'https://www.massgeneral.org/children/aspire/aspire-works/employer-partners', DEFAULT, 14);

-- Autism Alliance 
INSERT INTO Organization_Database2.Programs
VALUES (58, 'Outdoor Mini Golf', DEFAULT, DEFAULT, DEFAULT, 7),
(59, 'Karaoke Night', DEFAULT, 'https://www.autismalliance.org/events/fun-friends-and-family-karaoke-night', DEFAULT, 7);

-- Northeast Arc
INSERT INTO Organization_Database2.Programs
VALUES (60, 'Breaking Grounds Café ', DEFAULT, 'https://ne-arc.org/services/innovative-businesses/', DEFAULT, 6),
(61, 'Northeast Arc Heritage Shredding', DEFAULT, DEFAULT, DEFAULT, 6), 
(62, 'Transition and School Supports',DEFAULT, 'kmarques@ne-arc.org', DEFAULT, 6),
(63, 'S.T.E.P. (Skills Training Exploration Program)', DEFAULT, DEFAULT, DEFAULT, 6),
(64, 'Work Supports',DEFAULT, 'https://ne-arc.org/services/employment-training-and-placement/employment-preparation-programs/', DEFAULT, 6);


-- AANE
INSERT INTO Organization_Database2.Programs
VALUES (DEFAULT, 'Online “Open” AANE Book Club for Adults', DEFAULT, 'https://www.aane.org/event/online-open-aane-book-club-for-adults-5-11-21-600-pm-700-pm-est/', DEFAULT, 2);
SELECT Programs.Program_ID INTO @AANEBookClubID 
FROM Organization_Database2.Programs
WHERE Programs.Program_NAME like '%Online “Open” AANE Book Club for Adults%' 
limit 1; 

INSERT INTO Organization_Database2.Regions_has_Programs
VALUES  (@SuffolkID,@AANEBookClubID);

INSERT INTO Organization_Database2.Programs
VALUES (DEFAULT, 'Game Nights', DEFAULT, 'https://www.aane.org/resources/adults/social-groups/#Adult%20Activity%20-%20Virtual%20Game%20Night', DEFAULT, 2);
SELECT Programs.Program_ID INTO @AANEGameNightsID 
FROM Organization_Database2.Programs
WHERE Programs.Program_NAME like '%Game Nights%' 
limit 1; 

INSERT INTO Organization_Database2.Regions_has_Programs
VALUES  (@RemoteID ,@AANEGameNightsID);

SELECT * FROM Organization_Database2.Programs;
SELECT count(*) FROM Organization_Database2.Programs;