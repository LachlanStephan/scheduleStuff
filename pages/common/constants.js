const prod = {
  url: {
    API_URL: "https://schedule-stuff.herokuapp.com",
    API_URL_CHECKADMIN: "https://schedule-stuff.herokuapp.com/checkAdmin",
    API_URL_DELETEUSER: "https://schedule-stuff.herokuapp.com/deleteUser",
    API_URL_GETUSERS: "https://schedule-stuff.herokuapp.com/getAllUsers",
    API_URL_EMPTYEVENTS: "https://schedule-stuff.herokuapp.com/emptyEvents",
    API_URL_PROMOTEUSER: "https://schedule-stuff.herokuapp.com/promoteUser",
    API_URL_GETUSEREVENT: "https://schedule-stuff.herokuapp.com/getUserEvent",
    API_URL_GETUSERID: "https://schedule-stuff.herokuapp.com/getID",
    API_URL_GETUSERNAME: "https://schedule-stuff.herokuapp.com/getUserName",
    API_URL_CHECKFRIEND: "https://schedule-stuff.herokuapp.com/checkFriend",
    API_URL_ACCEPTFRIEND: "https://schedule-stuff.herokuapp.com/acceptFriend",
    API_URL_REJECTFRIEND: "https://schedule-stuff.herokuapp.com/rejectFriend",
    API_URL_FRIENDSLIST: "https://schedule-stuff.herokuapp.com/friendsList",
    API_URL_LOGIN: "https://schedule-stuff.herokuapp.com/login",
    API_URL_REGUSER: "https://schedule-stuff.herokuapp.com/regUser",
    API_URL_SCHEDULE: "https://schedule-stuff.herokuapp.com/schedule",
    API_URL_DELETEEVENT: "https://schedule-stuff.herokuapp.com/deleteEvent",
    API_URL_ADDSCHEDULE: "https://schedule-stuff.herokuapp.com/addSchedule",
    API_URL_UPDATENAME: "https://schedule-stuff.herokuapp.com/updateName",
    API_URL_LOGOUT: "https://schedule-stuff.herokuapp.com/logout",
    API_URL_ADDFRIEND: "https://schedule-stuff.herokuapp.com/addFriend",
    API_URL_CHECKLOGIN: "https://schedule-stuff.herokuapp.com/checkLogin",
  },
};

const dev = {
  url: {
    API_URL: "http://localhost:5000",
    API_URL_CHECKADMIN: "http://localhost:5000/checkAdmin",
    API_URL_DELETEUSER: "http://localhost:5000/deleteUser",
    API_URL_GETUSERS: "http://localhost:5000/getAllUsers",
    API_URL_EMPTYEVENTS: "http://localhost:5000/emptyEvents",
    API_URL_PROMOTEUSER: "http://localhost:5000/promoteUser",
    API_URL_GETUSEREVENT: "http://localhost:5000/getUserEvent",
    API_URL_GETUSERID: "http://localhost:5000/getID",
    API_URL_GETUSERNAME: "http://localhost:5000/getUserName",
    API_URL_CHECKFRIEND: "http://localhost:5000/checkFriend",
    API_URL_ACCEPTFRIEND: "http://localhost:5000/acceptFriend",
    API_URL_REJECTFRIEND: "http://localhost:5000/rejectFriend",
    API_URL_FRIENDSLIST: "http://localhost:5000/friendsList",
    API_URL_LOGIN: "http://localhost:5000/login",
    API_URL_REGUSER: "http://localhost:5000/regUser",
    API_URL_SCHEDULE: "http://localhost:5000/schedule",
    API_URL_DELETEEVENT: "http://localhost:5000/deleteEvent",
    API_URL_ADDSCHEDULE: "http://localhost:5000/addSchedule",
    API_URL_UPDATENAME: "http://localhost:5000/updateName",
    API_URL_LOGOUT: "http://localhost:5000/logout",
    API_URL_ADDFRIEND: "http://localhost:5000/addFriend",
    API_URL_CHECKLOGIN: "http://localhost:5000/checkLogin",
  },
};

export const urlConfig = process.env.NODE_ENV === `development` ? dev : prod;
