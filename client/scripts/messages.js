// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieve: ()=> {
    return Messages._data;
  },

  insert: function(data) {
    Messages._data = data;
  },

  retrieveAll: function() {
    return Messages._data;
  },

  render: function() {
    MessagesView.render();
  }

};