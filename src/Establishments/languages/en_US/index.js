import moment from 'moment';
moment.updateLocale('en', {
 weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
 week: { dow: 1 }
});

export default {
 "locale": "en",
 "fullDatetimeFormat": "dddd MMMM Do YYYY",
 "datetimeFormat": "DD/MM/YYYY HH:mm",
 "dateFormat": "DD/MM/YYYY",
 "timeFormat": "HH:mm",
 "languages": {
  "es_ES": "🇪🇸 Spanish (Spain)",
  "en_US": "🇺🇸 English (United States)"
 },

 "Settings": {
  "name": "settings",
  "title": "Settings",
  "roles": "User roles",
  "types": "Products categorization",
  "permissions": {
   "read": "Read",
   "update": "Edit",
   "create": "Create",
   "delete": "Delete"
  }
 },

 "Documentation": {
  "title": "API Documentation"
 },

 "Unauthorized": "Your are not authorized to perform this action",

 "DeleteConfirmTitle": "Warning!",
 "DeleteConfirmValue": "DELETE",
 "DeleteConfirmMessage": "!This action will can't rollback! Do you want continue?",
 "DeleteConfirmPlaceholder": "Write DELETE",
 "DeleteConfirmYES": "Yes, delete!",
 "DeleteConfirmNO": "No, go back!",

 "Status": {
  "enabled": "Active",
  "disabled": "Inactive"
 },

 "ExportCSV": "Export to CSV",
 "tableReset": "Reset",
 "tableEmpty": "There are not results",
 "pagination": {
  "firstPageText": '«-',
  "prePageText": '«',
  "nextPageText": '»',
  "lastPageText": '-»',
  "firstPageTitle": 'First page',
  "prePageTitle": 'Pre page',
  "nextPageTitle": 'Next page',
  "lastPageTitle": 'Last page',
 },
 "paginationFooter": (from, to, size) => {
  return window.innerWidth > 768
   ? size > 0
    ? (from == 1 && size <= to)
     ? 'Showing a total of <strong>' + size + '</strong>'
     : 'Showing from <strong>' + from + '</strong> to <strong>' + to + '</strong> of <strong>' + size + '</strong>'
    : 'There are not'
   : 'Total: <strong>' + size + '</strong>'
 },

 "Dashboard": {
  "title": "Dashboard",
  "titles": {
   "totals": "Last months",
   "last": "Last days"
  },
  "labels": {
   "total": "Totals",
   "sales": "Sales",
   "bookings": "Bookings",
   "cancellations": "Cancellations"
  },
  "groups": {
   "operators": "Operators",
   "providers": "Providers",
   "establishments": "Establishments",
   "types": "Categories",
   "products": "Products",
   "events": "Activities",
   "months": "Months",
   "days": "Days"
  },
  "ranges": {
   'Today': [moment(), moment()],
   'This week': [moment().startOf('week').add(1, 'days'), moment().endOf('week').add(1, 'days')],
   'Last 7 days': [moment().subtract(6, 'days'), moment()],
   'This month': [moment().startOf('month'), moment().endOf('month')],
   'Last 30 days': [moment().subtract(29, 'days'), moment()],
   'This year': [moment().startOf('year'), moment().endOf('year')]
  },
  "buttons": {
   "groupBy": "Group by",
   "applyLabel": "Apply",
   "cancelLabel": "Cancel",
   "customRangeLabel": "Customize",
   "fromLabel": "From",
   "toLabel": "to"
  }
 },

 "Login": {
  "title": "Access restricted",
  "subtitle": "FiestaisMadrid - Events Manager",
  "username": "Email",
  "password": "Password",
  "submit": "Enter",
  "forgotten": "Help! I can't access",
  "backtologin": "Go back to login",
  "producedBy": "Produced by",
  "financedBy": "Co-financed by"
 },

 "Users": {
  "names": {
   "administrators": "administrators",
   "providers": "providers",
   "operators": "operators",
   "users": "users"
  },
  "titles": {
   "administrators": "Administrators",
   "providers": "Providers",
   "operators": "Operators",
   "users": "Users",
   "profile": "User profile",
   "editorTab1": "User information",
   "editorTab2": "Contact information",
   "disconnect": "Disconnect"
  },
  "columns": {
   "username": "Username",
   "password": "Password",
   "email": "Email",
   "role": "User role",
   "parent": "Owner",
   "status": "Status",
   "reg_date": "Registration date",
   "NID": "Passport ID",
   "tradename": "Trade name",
   "taxname": "Tax name",
   "firstname": "First name (Contact person)",
   "surname": "Surname (Contact person)",
   "address": "Address",
   "locality": "City",
   "state": "State",
   "postcode": "Post code",
   "country": "Country",
   "phone": "Phone number",
   "mobile": "Mobile number",
   "language": "Language"
  },
  "placeholders": {
   "username": "Enter a user alias",
   "password": "Enter a password (twice)",
   "email": "Enter the email of the user",
   "NID": "Enter Tax ID or Document ID",
   "tradename": "Enter tradename",
   "taxname": "Enter tax name",
   "firstname": "Enter contact person first name",
   "surname": "Enter contact person surname",
   "address": "Write full address (street and number)",
   "locality": "Enter city or town",
   "state": "Enter state",
   "postcode": "Postal code",
   "country": "Country",
   "phone": "Enter phone number",
   "mobile": "Enter mobile number",
  },
  "buttons": {
   "addUser": {
    "administrators": "Add administrator",
    "providers": "Add provider",
    "operators": "Add operator"
   },
   "createUser": {
    "administrators": "Add administrator",
    "providers": "Add provider",
    "operators": "Add operator"
   },
   "saveUser": "Create user",
   "saveChanges": "Save changes",
   "delSelected": "Delete selected",
   "closeEditor": "Cancel",
  },
  "Errors": {
   "PassNotMatch": "Password does not match"
  },
  "Alerts": {
   "profileSaved": "Your profile has been updated"
  },
  "isGoingToDelete": (IDs) => {
   return IDs.length == 1 ? 'A user is going to remove' : IDs.length + ' users are going to remove'
  },
  "hasBeenDeleted": (name) => {
   return 'The user "' + name + '" has been eliminated'
  },
  "hasNotBeenDeleted": (name) => {
   return 'The user "' + name + '" can not be eliminated, have tickets'
  }
 },


 "Establishments": {
  "name": "establishments",
  "title": "Establishments",
  "titles": {
   "editorTab1": "Establishments info",
   "editorTab2": "Photo gallery"
  },
  "columns": {
   "name": "Establishment name",
   "description": "Description",
   "full_address": "Full address"
  },
  "placeholders": {
   "name": "Enter the name of the establishment",
   "description": "Write a short description",
   "full_address": "Enter full address"
  },
  "buttons": {
   "add": "Add establishment",
   "createBtn": "Create establishment",
   "saveChanges": "Save changes",
   "delSelected": "Delete selected",
   "closeEditor": "Cancel",
   "uploadPhoto": "Upload files"
  },
  "isGoingToDelete": (IDs) => {
   return IDs.length == 1 ? 'A establishment is going to remove' : IDs.length + ' establishments are going to remove'
  },
  "hasBeenDeleted": (name) => {
   return 'The establishment "' + name + '" has been deleted'
  },
  "hasNotBeenDeleted": (name) => {
   return 'The establishment "' + name + '" can not be eliminated, have tickets'
  }
 },


 "Products": {
  "name": "products",
  "title": "Products",
  "titles": {
   "statistics": "Statistics",
   "editorTab1": "Product info",
   "editorTab2": "QR Generator",
   "editorTab3": "Booking options",
   "editorTab4": "Photo gallery",
   "repetition": "Repetition",
   "repeat_pattern": "Repeat pattern",
   "repeat_every": "Repeat every",
   "repeat_onday": "The day",
   "repeat_the": "The",
   "repeat_end": "End of repetition",
   "repeat_time": "Repeat along",
   "repeat_from": "from start date",
   "repeat_weekdays": "Repetition days",
   "repeat_daymonth": "of every month",
   "repeat_select": {
    "first": "first",
    "second": "second",
    "third": "third",
    "fourth": "fourth",
    "last": "last",
   },
   "hours": "hour (s)",
   "days": "day (s)",
   "weeks": "week (s)",
   "months": "month (es)",
   "years": "year (s)"
  },
  "columns": {
   "name": "Product name",
   "type": "Category",
   "description": "Description",
   "establishment": "Establishment",
   "start_date": "Start date",
   "finish_date": "Finish date",
   "bookings": "Bookings",
   "repetition": {
    "none": "Don't repear",
    "daily": "Daily",
    "weekly": "Weekly",
    "monthly": "Monthly"
   },
   "tickets": {
    "name": 'QR name',
    "stock": 'Stock',
    "uses_limit": 'Uses',
    "booking_limit": "Booking until",
    "cancellation_limit": "Cancel until",
    "validity_time": "Validity time",
    "weekdays": "Weekdays validity (All if any)",
   },
   "packets": {
    "name": 'Packet name',
    "price": 'Price'
   }
  },
  "placeholders": {
   "name": "Enter product name",
   "description": "Write a short description",
   "establishment": "Search here associated establishment",
   "tickets": {
    "name": 'QR name',
    "stock": 'Stock',
    "limit": 'Uses limit'
   },
   "packets": {
    "name": 'Packet name',
    "price": 'Price'
   },
   "typeadd": "Write the name of the category to create (All languages are required)"
  },
  "buttons": {
   "add": "Add product",
   "addType": "Add",
   "addTicket": "Add QR template",
   "addPacket": "Add reservation option",
   "createBtn": "Create product",
   "saveAll": "Save all",
   "saveChanges": "Save changes",
   "delete": "Delete",
   "delSelected": "Delete selected",
   "closeEditor": "Cancel",
   "uploadPhoto": "Upload files",
   "showFinished": "Include finished",
   "showDisabled": "Include deactivated"
  },
  "isGoingToDelete": (IDs) => {
   return IDs.length == 1 ? 'A product is going to remove' : IDs.length + ' products are going to remove'
  },
  "hasBeenDeleted": (name) => {
   return 'The product "' + name + '" has been eliminated'
  },
  "hasNotBeenDeleted": (name) => {
   return 'The product "' + name + '" can not be eliminated, have tickets'
  },
  "typeHasNotBeenDeleted": (name) => {
   return 'The category "' + name + "\" can't be eliminated, is busy"
  }
 },

 "Events": {
  "name": "activities",
  "title": "Activities",
  "upcoming": "Upcoming activities"
 },

 "Tickets": {
  "name": "bookings",
  "title": "Bookings",
  "titles": {
   "editorTab1": "Booking options",
   "editorTab2": "Client contacts",
  },
  "columns": {
   "ownerName": "Creator",
   "ticketName": "Name",
   "productName": "Product",
   "establishmentName": "Establishment",
   "clientName": "Client name",
   "startDate": "Start date",
   "finishDate": "Finish date",
   "cancellationUntil": "Cancellation until",
   "usesLeft": "Uses left",
   "stockLeft": "Stock left",
   "documentID": "User passport ID",
   "full_name": "Full name",
   "email": "Email",
   "phone": "Mobile"
  },
  "placeholders": {
   "documentID": "Enter the passport ID of client",
   "full_name": "Enter client name",
   "email": "Enter client email",
   "phone": "Enter client mobile number"
  },
  "buttons": {
   "createBtn": "Create order",
   "saveChanges": "Save changes",
   "delSelected": "Delete selected",
   "closeEditor": "Cancel",
   "showAsTickets": "Show tickets"
  },
  "isGoingToDelete": (IDs) => {
   return IDs.length == 1 ? 'A ticket is going to remove' : IDs.length + ' tickets are going to remove'
  },
  "hasBeenDeleted": () => {
   return 'The ticket has been revoked'
  },
  "hasNotBeenDeleted": () => {
   return 'The ticket can not be eliminated'
  },
  "availStock": (avail) => {
   return '<strong>Stock:</strong>&nbsp;' + avail + ' available'
  }
 },


 "Autosuggest": {
  "inProgress": 'Searching...',
  "noResults": 'No results',
  "minChars": 'Type at least one char to start',
  "errMessage": (message) => {
   return 'Error: ' + message
  }
 },


 "Errors": {
  "needsupport": "Write to soporte@absystem.com for support"
 }


}
