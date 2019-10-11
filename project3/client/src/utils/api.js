import axios from "axios";

export default {
  // Gets all users
  getUser: function(user) {

    console.log('hello', user)
    return axios.get("/api/user/", user);
  },


  newUser: function(userData) {

    console.log('HELLO', userData);
    return axios.post("/api/user", userData);
  }
  // Saves a book to the database
//   saveBook: function(us) {
//     return axios.post("/api/books", bookData);
//   }
};
