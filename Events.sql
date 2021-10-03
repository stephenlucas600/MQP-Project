-- Autism Alliance 
INSERT INTO Organization_Database2.Events
VALUES (default,'Fun, Friends, & Family: Outdoor Mini Golf','No', 'No', '750 Concord Street, Holliston, MA 01746 ', default, 58);



 SELECT Programs.program_ID INTO @BCfA FROM Programs where Programs.program_NAME like 'Online “Open” AANE Book Club for Adult%' limit 1;
-- 59

INSERT INTO Organization_Database2.Events value (default,'Online “Open” AANE Book Club for Adults','Yes', 'No', 'Online  via Zoom', default, @BCfA);


SELECT Programs.program_ID INTO @FFAFKaraokeNight FROM Programs where Programs.program_NAME like '%Karaoke Night%' limit 1;

INSERT INTO Organization_Database2.Events
VALUES (default,'Fun, Friends, And Family: Karaoke Night','Yes', 'Yes', default, default, @FFAFKaraokeNight);

INSERT INTO Organization_Database2.Events
VALUES (default,'Fun, Friends, And Family: Zoom Karaoke','Yes', 'Yes', default, default, @FFAFKaraokeNight);

SELECT Programs.program_ID INTO @GameNights FROM Programs where Programs.program_NAME like '%Game Nights%' limit 1;

INSERT INTO Organization_Database2.Events
VALUES (default,'Online “Open” Virtual Game Night for Adults','Yes', 'Yes', default, default,  @GameNights);

SELECT * FROM Organization_Database2.Events;