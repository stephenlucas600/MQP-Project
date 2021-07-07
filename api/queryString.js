//Stephen Lucas
// 7/6/2021
// Take in inpute and return a MySql Query string

// String functions

function getOrganization(Organization_NAME) {
  return (
    "SELECT * FROM Organizations " +
      "JOIN Programs ON Programs.Organization_ID=Organizations.Organization_ID " +
      "WHERE Organizations.Organization_NAME like '%",
    Organization_NAME,
    "%'; "
  );
}

function getOEventTime(EventName) {
  return;
  "SELECT * ",
    "FROM Events ",
    "JOIN Event_Dates on Events.Event_ID=Event_Dates.Event_ID",
    "where Events.Event_Name like '%",
    EventName,
    "%';";
}

// return to routes.js the query string function.
export default function QueryString(query, input) {
  switch (query) {
    case "getOrganization":
      return getOrganization(input);
      break;
    default:
      console.error("Query Don't Match:" + query);
  }
}
