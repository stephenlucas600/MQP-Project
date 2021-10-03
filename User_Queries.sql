-- User Queries 
SELECT Organizations.Organization_NAME, Organizations.Website_Link, Programs.program_Name AS `Program`, Programs.Program_Website_Link, Programs.Provider  FROM Organizations JOIN Programs ON Programs.Organization_ID=Organizations.Organization_ID;		 
-- Q1: What organization does this program belong to? 
SELECT Programs.program_Name, Programs.Description, Organizations.Organization_NAME, Organizations.Website_Link
FROM Programs JOIN 
	Organizations 
    ON Programs.Organization_ID=Organizations.Organization_ID;














SELECT Organizations.Organization_NAME, Organizations.Website_Link, Organizations.Description FROM organizations;
    
SELECT Programs.program_Name, Programs.Description, Organizations.Organization_NAME
FROM Programs JOIN 
	Organizations 
    ON Programs.Organization_ID=Organizations.Organization_ID
    WHERE Programs.program_Name="Northeast Arc Heritage Shredding";
    
-- Q2: What times does this event happen? 
SELECT Events.Event_Name, Event_Dates.Start_Date, Event_Dates.End_Date
FROM Events 
JOIN Event_Dates
on Events.Event_ID=Event_Dates.Event_ID;


    
SELECT Events.Event_Name, Event_Dates.Start_Date, Event_Dates.End_Date
FROM Events 
JOIN Event_Dates
on Events.Event_ID=Event_Dates.Event_ID
where Events.Event_Name like "Fun, Friends, & Family: Outdoor Mini Golf";



SELECT Events.Event_Name, Event_Dates.Start_Date, Event_Dates.End_Date, Organizations.Organization_NAME, Programs.program_Name
FROM Events 
JOIN Event_Dates
on Events.Event_ID=Event_Dates.Event_ID
JOIN Programs
ON Events.Program_ID=Programs.Program_ID
JOIN Organizations
ON Programs.Organization_ID=Organizations.Organization_ID;

-- Q3: All programs that belong to this Organization? 


SELECT Organizations.Organization_NAME, Programs.program_Name 
FROM Organizations 
JOIN Programs
ON Programs.Organization_ID=Organizations.Organization_ID
WHERE Organizations.Organization_NAME LIKE "%Autism%";


SELECT Organizations.Organization_NAME, Organizations.Website_Link, Programs.program_Name 
FROM Organizations 
JOIN Programs
ON Programs.Organization_ID=Organizations.Organization_ID;


SELECT * FROM Organizations JOIN Programs ON Programs.Organization_ID=Organizations.Organization_ID 
WHERE Organizations.Organization_NAME LIKE "%AANE%";

SELECT * 
FROM Organizations 
JOIN Programs
ON Programs.Organization_ID=Organizations.Organization_ID
WHERE Organizations.Organization_NAME LIKE "%AANE%";


-- Q4:What other programs does this contact info relate to? 

SELECT Contacts.Title, Contacts.Address, Contacts.Phone_Number, Organizations.Organization_NAME, Programs.program_Name
FROM Programs_Contacts
JOIN Programs
	ON Programs.Program_ID=Programs_Contacts.program_ID
JOIN Contacts
	ON Programs_Contacts.Contact_ID=Contacts.Contact_ID
JOIN Organizations
	ON Organizations.Organization_ID=Contacts.Organization_ID
WHERE Contacts.Phone_Number LIKE "%978-624-3058%";


-- Q5: Find programs(description, contact, organization name) under a specific services type. 
-- (ex: What programs and organization has that involve employment?)  
SELECT Programs.program_NAME, Programs.Description, Services_Type.Service_Type_NAME, Organizations.Organization_NAME, Contacts.Email, Contacts.Address, Contacts.Phone_Number
FROM Services_Type_has_Programs 
JOIN Services_Type 
	ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID 
JOIN Programs 
	ON Services_Type_has_Programs.Program_ID=Programs.Program_ID
JOIN Organizations 
	ON Organizations.Organization_ID=Programs.Organization_ID
JOIN Programs_Contacts 
	ON Programs.Program_ID=Programs_Contacts.Program_ID
JOIN Contacts 
	ON Contacts.Contact_ID=Programs_Contacts.Contact_ID;
    

SELECT Programs.Program_Name, Programs.Description, Services_Type.Service_Type_Name, 
	Organizations.Organization_NAME, Contacts.Email,Contacts.Address, Contacts.Phone_Number
	FROM Services_Type_has_Programs 
	JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID 
	JOIN Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID
	JOIN Organizations ON Organizations.Organization_ID=Programs.Organization_ID
	JOIN Programs_Contacts ON Programs.Program_ID=Programs_Contacts.Program_ID
	JOIN Contacts ON Contacts.Contact_ID=Programs_Contacts.Contact_ID
	where Services_Type.Service_Type_Name LIKE "%Employment%";

-- Q6: What location is this program being held. 

SELECT Programs.Program_Name, Contacts.Address, Regions.Region_NAME FROM Programs_Contacts 
	JOIN Programs 
		ON Programs.Program_ID=Programs_Contacts.Program_ID
	JOIN Contacts 
		ON Contacts.Contact_ID=Programs_Contacts.Contact_ID
	JOIN Regions_has_Programs 
		ON Regions_has_Programs.Program_ID=Programs.Program_ID
	JOIN Regions 
		ON Regions.Region_ID=Regions_has_Programs.Region_ID
        WHERE Programs.program_Name LIKE "Neurodiverse Couples Coaching";

SELECT Programs.program_Name, Contacts.Address FROM Programs_Contacts 
	JOIN Programs 
		ON Programs.Program_ID=Programs_Contacts.Program_ID
	JOIN Contacts 
		ON Contacts.Contact_ID=Programs_Contacts.Contact_ID;



-- Q7: Are there any events coming up soon (today, tomorrow, this week, this month)? 
SELECT Events.Event_Name, Event_Dates.Start_Date, Event_Dates.End_Date
FROM Events 
JOIN Event_Dates 
ON Events.Event_ID=Event_Dates.Event_ID;


SELECT Events.Event_Name, Event_Dates.Start_Date, Event_Dates.End_Date
FROM Event_Dates
JOIN Events 
ON Events.Event_ID=Event_Dates.Event_ID
where Event_Dates.Start_Date between '2021-01-01 12:00:00' and '2021-06-30 12:00:00';


-- Q8: Is a program is funded private/Publicly/ or insured? 
SELECT Programs.Program_Name, Programs.Provider
FROM Programs;

SELECT Programs.Program_Name, Programs.Provider
FROM Programs 
WHERE Programs.Provider LIKE "%private%";

-- Q9: Which Organization offers more 2 events in the coming month? 
SELECT Organizations.Organization_NAME, Programs.Program_NAME, Events.Event_NAME, Event_Dates.Start_Date
FROM Organizations
join Programs
	on Organizations.Organization_ID=Programs.Organization_ID
join Events 
	on Programs.Program_ID=Events.Program_ID
join Event_Dates
	on Events.Event_ID=Event_Dates.Event_ID;
    
select Organizations.Organization_NAME, COUNT(*) AS MOST_FREQUENT
FROM Organizations
	join Programs
		on Organizations.Organization_ID=Programs.Organization_ID
	join Events 
		on Programs.Program_ID=Events.Program_ID
	join Event_Dates
		on Events.Event_ID=Event_Dates.Event_ID
WHERE Event_Dates.Start_Date between '2021-05-1 12:00:00' and '2021-07-1 12:00:00'
GROUP BY Organizations.Organization_NAME
HAVING COUNT(Events.Event_ID) >= 2 
ORDER BY COUNT(Organizations.Organization_NAME) DESC;


-- Q10: Which organization offered the largest number of events last year 

select Organizations.Organization_NAME, COUNT(*) AS MOST_FREQUENT
	FROM Organizations
		join Programs
			on Organizations.Organization_ID=Programs.Organization_ID
		join Events 
			on Programs.Program_ID=Events.Program_ID
		join Event_Dates
			on Events.Event_ID=Event_Dates.Event_ID
	WHERE Event_Dates.Start_Date between '2021-01-1 12:00:00' and '2022-01-1 12:00:00'
	GROUP BY Organizations.Organization_NAME 
	order by MOST_FREQUENT DESC limit 1;
    
select kay.Organization_NAME, kay.MOST_FREQUENT FROM (
	select Organizations.Organization_NAME, COUNT(*) AS MOST_FREQUENT FROM Organizations
		join Programs
			on Organizations.Organization_ID=Programs.Organization_ID
		join Events 
			on Programs.Program_ID=Events.Program_ID
		join Event_Dates
			on Events.Event_ID=Event_Dates.Event_ID
	WHERE Event_Dates.Start_Date between '2021-01-1 12:00:00' and '2021-012-30 12:00:00'
	GROUP BY Organizations.Organization_NAME 
) kay
WHERE kay.MOST_FREQUENT = (
	SELECT MAX(MOST_FREQUENT) as maxV FROM (
		select Organizations.Organization_NAME, COUNT(*) AS MOST_FREQUENT FROM Organizations
			join Programs
				on Organizations.Organization_ID=Programs.Organization_ID
			join Events 
				on Programs.Program_ID=Events.Program_ID
			join Event_Dates
				on Events.Event_ID=Event_Dates.Event_ID
		WHERE Event_Dates.Start_Date between '2021-01-1 12:00:00' and '2021-012-30 12:00:00'
		GROUP BY Organization_NAME
	) maxTable 
)
Group by kay.Organization_NAME;




select * FROM (
	select kay.Organization_NAME, kay.MOST_FREQUENT
	from (
		select Organizations.Organization_NAME, COUNT(*) AS MOST_FREQUENT
		FROM Organizations
			join Programs
				on Organizations.Organization_ID=Programs.Organization_ID
			join Events 
				on Programs.Program_ID=Events.Program_ID
			join Event_Dates
				on Events.Event_ID=Event_Dates.Event_ID
		WHERE Event_Dates.Start_Date between '2021-01-1 12:00:00' and '2021-012-30 12:00:00'
		GROUP BY Organizations.Organization_NAME 
	) kay
) n
where n.MOST_FREQUENT=2;


CREATE TEMPORARY TABLE IF NOT EXISTS temp_max_Date_Table (select Organizations.Organization_NAME, COUNT(*) AS MOST_FREQUENT
		FROM Organizations
			join Programs
				on Organizations.Organization_ID=Programs.Organization_ID
			join Events 
				on Programs.Program_ID=Events.Program_ID
			join Event_Dates
				on Events.Event_ID=Event_Dates.Event_ID
		WHERE Event_Dates.Start_Date between '2021-01-1 12:00:00' and '2021-012-30 12:00:00'
		GROUP BY Organization_NAME);
        
select temp_max_Date_Table.Organization_NAME, temp_max_Date_Table.MOST_FREQUENT
from temp_max_Date_Table as temp
WHERE temp_max_Date_Tabl.MOST_FREQUENT = 
	(SELECT MAX(MOST_FREQUENT) as maxV
	 FROM temp_max_Date_Table)
Group by temp_max_Date_Table.Organization_NAME;



SELECT MAX(MOST_FREQUENT) as maxV
	FROM (select Organizations.Organization_NAME, COUNT(*) AS MOST_FREQUENT
		FROM Organizations
			join Programs
				on Organizations.Organization_ID=Programs.Organization_ID
			join Events 
				on Programs.Program_ID=Events.Program_ID
			join Event_Dates
				on Events.Event_ID=Event_Dates.Event_ID
		WHERE Event_Dates.Start_Date between '2021-01-1 12:00:00' and '2021-012-30 12:00:00'
		GROUP BY Organization_NAME) maxTable;

select Max(MOST_FREQUENT) as max_event
from (
	select Organizations.Organization_NAME, COUNT(*) AS MOST_FREQUENT
	FROM Organizations
	join Programs
		on Organizations.Organization_ID=Programs.Organization_ID
	join Events 
		on Programs.Program_ID=Events.Program_ID
	join Event_Dates
		on Events.Event_ID=Event_Dates.Event_ID
	WHERE Event_Dates.Start_Date between '2021-01-1 12:00:00' and '2021-012-30 12:00:00'
	GROUP BY Organizations.Organization_NAME 
    ) k;
    
select Organizations.Organization_NAME, COUNT(*) AS MOST_FREQUENT 
from Organizations
	join Programs
		on Organizations.Organization_ID=Programs.Organization_ID
	join Events 
		on Programs.Program_ID=Events.Program_ID
	join Event_Dates
		on Events.Event_ID=Event_Dates.Event_ID
	WHERE Event_Dates.Start_Date between '2021-01-1 12:00:00' and '2021-012-30 12:00:00'
    GROUP BY Organizations.Organization_NAME ;

-- Q11: Which organization offer employment services, and is it offered in an area near me?

select Programs.Program_NAME, City_NAME, Regions.Region_NAME
from Regions_Cities
join Regions 
	on Regions_Cities.Region_ID=Regions.Region_ID
join Regions_has_Programs 
	on Regions.Region_ID=Regions_has_Programs.Region_ID
join Programs
	on Regions_has_Programs.Program_ID=Programs.Program_ID
join Organizations
	on Organizations.Organization_ID=Programs.Organization_ID
join Services_Type_has_Programs
	on Programs.Program_ID=Services_Type_has_Programs.Program_ID
join Services_Type
	on Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID
where Services_Type.Service_Type_ID = 4 -- Employment Services
	and (Regions_Cities.City_Name like '%Boston%' or Regions_Cities.City_Name like '%Remote%');

Select Regions.Region_NAME from Regions;

select * from Regions_Cities
join Regions_has_Programs 
	on Regions_Cities.Region_ID=Regions_has_Programs.Region_ID
join Programs
	on Regions_has_Programs.Program_ID=Programs.Program_ID
where Regions_Cities.City_Name like '%Boston%' or Regions_Cities.City_Name like '%Remote%';

SELECT Programs.Program_Name, Regions.Region_NAME, Cities.City_NAME, Cities.ZIP_CODE
FROM Programs
JOIN Regions_has_Programs 
ON Programs.Program_ID=Regions_has_Programs.Program_ID
JOIN Regions 
ON Regions_has_Programs.Region_ID=Regions.Region_ID
JOIN Regions_Cities 
ON Regions_Cities.Region_ID=Regions.Region_ID
JOIN Cities 
ON Cities.City_NAME=Regions_Cities.City_NAME;


SELECT * FROM Programs
JOIN Regions_has_Programs 
ON Programs.Program_ID=Regions_has_Programs.Program_ID
JOIN Regions 
ON Regions_has_Programs.Region_ID=Regions.Region_ID
JOIN Regions_Cities 
ON Regions_Cities.Region_ID=Regions.Region_ID
JOIN Cities 
ON Cities.City_NAME=Regions_Cities.City_NAME;


-- Q12: Which service type is offered by more then two organizations.

select COUNT(*) As NUM_OF_ORG_Services, ORG_TYPS.Service_Type_NAME
FROM (
		select DISTINCT Organizations.Organization_NAME, Services_Type.Service_Type_NAME
		FROM Organizations
			JOIN Programs 
				ON Organizations.Organization_ID=Programs.Organization_ID
			JOIN Services_Type_has_Programs 
				ON Services_Type_has_Programs.Program_ID=Programs.Program_ID
			JOIN Services_Type 
				ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID
) ORG_TYPS
group by ORG_TYPS.Service_Type_NAME
HAVING Count(*) > 2;
    
select COUNT(*) As NUM_OF_ORG_Services, ORG_TYPS.Service_Type_NAME FROM ( select DISTINCT Organizations.Organization_NAME, Services_Type.Service_Type_NAME FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID ) ORG_TYPS group by ORG_TYPS.Service_Type_NAME HAVING Count(*) > 2;
    
select * 
from (
	select COUNT(ORG_TYPS.Organization_NAME) As NUM_OF_ORG_Services, ORG_TYPS.Organization_NAME
	FROM (
		select DISTINCT Organizations.Organization_NAME, Services_Type.Service_Type_NAME
		FROM Organizations
			JOIN Programs 
				ON Organizations.Organization_ID=Programs.Organization_ID
			JOIN Services_Type_has_Programs 
				ON Services_Type_has_Programs.Program_ID=Programs.Program_ID
			JOIN Services_Type 
				ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID
	) ORG_TYPS
	group by ORG_TYPS.Organization_NAMEorganization_programs
) count_Typs
Where count_Typs.NUM_OF_ORG_Services > 2;

select Services_Type.Service_Type_NAME
FROM Services_Type;

-- number of Services_Type entries
select COUNT(Services_Type.Service_Type_NAME) As NUM_OF_Services, Services_Type.Service_Type_NAME
FROM Organizations
	JOIN Programs 
		ON Organizations.Organization_ID=Programs.Organization_ID
	JOIN Services_Type_has_Programs 
		ON Services_Type_has_Programs.Program_ID=Programs.Program_ID
	JOIN Services_Type 
		ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID
group by  Services_Type.Service_Type_NAME;

-- table of all Service_Types a orgonization could offer
select DISTINCT Organizations.Organization_NAME, Services_Type.Service_Type_NAME
FROM Organizations
	JOIN Programs 
		ON Organizations.Organization_ID=Programs.Organization_ID
	JOIN Services_Type_has_Programs 
		ON Services_Type_has_Programs.Program_ID=Programs.Program_ID
	JOIN Services_Type 
		ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID;



-- Q13: Which Organization offers no programs related to employment. 

SELECT * FROM Organizations
WHERE Organizations.Organization_ID not in (
	SELECT distinct Organizations.Organization_ID
	FROM Organizations 
		JOIN Programs 
			ON Organizations.Organization_ID=Programs.Organization_ID
		JOIN Services_Type_has_Programs 
			ON Services_Type_has_Programs.Program_ID=Programs.Program_ID
		JOIN Services_Type 
			ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID
	WHERE Services_Type.Service_Type_NAME  like '%Employment%'
);

SELECT Organizations.Organization_ID, Organizations.Organization_NAME, Services_Type.Service_Type_NAME
FROM Services_Type_has_Programs 
	JOIN Services_Type 
		ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID 
	JOIN Programs 
		ON Services_Type_has_Programs.Program_ID=Programs.Program_ID
	JOIN Organizations 
		ON Organizations.Organization_ID=Programs.Organization_ID
where Services_Type.Service_Type_NAME  like '%Employment%' ;

SELECT Contacts.Title, Organizations.Organization_NAME, Programs.program_Name 
FROM Programs_Contacts 
	JOIN Programs ON Programs.Program_ID=Programs_Contacts.program_ID 
    JOIN Contacts ON Programs_Contacts.Contact_ID=Contacts.Contact_ID 
    JOIN Organizations ON Organizations.Organization_ID=Contacts.Organization_ID;


SELECT Events.Event_Name, Event_Dates.Start_Date, Event_Dates.End_Date, Organizations.Organization_NAME, Programs.program_Name, Regions_Cities.City_NAME, Regions.Region_NAME
FROM Events 
	JOIN Event_Dates on Events.Event_ID=Event_Dates.Event_ID 
    JOIN Programs ON Events.Program_ID=Programs.Program_ID 
    JOIN Organizations ON Programs.Organization_ID=Organizations.Organization_ID 
    LEFT JOIN Regions_has_Programs ON Regions_has_Programs.Program_ID=Programs.Program_ID 
    LEFT JOIN Regions on Regions.Region_ID=Regions_has_Programs.Region_ID 
    LEFT JOIN Regions_Cities ON Regions_Cities.Region_ID=Regions.Region_ID;
    
select COUNT(*) As NUM_OF_ORG_Services, ORG_TYPS.Service_Type_NAME FROM ( select DISTINCT Organizations.Organization_NAME, Services_Type.Service_Type_NAME FROM Organizations JOIN Programs ON Organizations.Organization_ID=Programs.Organization_ID JOIN Services_Type_has_Programs ON Services_Type_has_Programs.Program_ID=Programs.Program_ID JOIN Services_Type ON Services_Type.Service_Type_ID=Services_Type_has_Programs.Service_Type_ID ) ORG_TYPS group by ORG_TYPS.Service_Type_NAME HAVING Count(*) > 2;

