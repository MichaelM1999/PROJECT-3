import axios from "axios";

export default {
  // Gets all users
  getUser: function(username) {
    return axios.get("/api/user/" + username);
  },
  newUser: function(userData) {
    return axios.post("/api/user", userData);
  }
  // Saves a book to the database
//   saveBook: function(us) {
//     return axios.post("/api/books", bookData);
//   }
};
