
-- Outdoor Mini Golf 
SELECT Events.Event_ID INTO @OutdoorMiniGolf 
FROM Events
WHERE Events.Event_NAME like '%Fun, Friends, & Family: Outdoor Mini Golf%';

INSERT INTO Organization_Database2.Event_Dates
VALUES (@OutdoorMiniGolf,'2021-05-09 16:00:00','2021-05-09 18:00:00');

-- Online “Open” AANE Book Club for Adults
SELECT Events.Event_ID INTO @OnlineOpenAANEBookClubforAdults 
FROM Events
WHERE Events.Event_NAME like '%AANE Book Club for Adult%';

INSERT INTO Organization_Database2.Event_Dates
VALUES (@OnlineOpenAANEBookClubforAdults ,'2021-05-11 18:00:00','2021-05-11 19:00:00');
INSERT INTO Organization_Database2.Event_Dates
VALUES (@OnlineOpenAANEBookClubforAdults ,'2021-05-25 18:00:00','2021-05-25 19:00:00');

-- Fun, Friends, And Family: Zoom Karaoke
SELECT Events.Event_ID INTO @FFAFZoomKaraoke
FROM Events
WHERE Events.Event_NAME like '%Fun, Friends, And Family: Zoom Karaoke%';


INSERT INTO Organization_Database2.Event_Dates
VALUES (@FFAFZoomKaraoke ,'2021-06-25 18:00:00','2021-06-25 19:00:00');

-- Online “Open” Virtual Game Night for Adults
SELECT Events.Event_ID INTO @AANEGameNights
FROM Events
WHERE Events.Event_NAME like '%Online “Open” Virtual Game Night for Adults%';

INSERT INTO Organization_Database2.Event_Dates
VALUES (@AANEGameNights ,'2021-06-28 18:30:00','2021-06-28 20:30:00');


SELECT * FROM Organization_Database2.Event_Dates;
SELECT * FROM Organization_Database2.Events;
