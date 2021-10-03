-- Programs Contacts Table


SELECT * FROM Organization_Database2.Programs_Contacts;
SELECT * FROM Programs;
SELECT * FROM Contacts;

SELECT Programs.Program_NAME, Contacts.Title FROM Programs_Contacts
join Programs
on Programs.Program_ID=Programs_Contacts.program_ID
join Contacts
on Contacts.Contact_ID=Programs_Contacts.Contact_ID;
