import axios from "axios";

export default {
  // Gets all users
  getUser: function(user) {

    console.log('hello', user)
    return axios.post("/api/user/login", user);
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
