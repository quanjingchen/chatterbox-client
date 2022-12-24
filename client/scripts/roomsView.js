// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $input: $('#room'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    Parse.readAll(data => {
      RoomsView.render(data);
    });
    RoomsView.$select.change(RoomsView.handleChange);
    $('#newroom').click(RoomsView.handleClick);
  },

  render: function(data) {
    // TODO: Render out the list of rooms.
    data.forEach(tweet => {
      // if (!container[tweet.roomname]) {
      //   container[tweet.roomname] = true;
      // }
      Rooms.insertOne(tweet.roomname);
    });

    RoomsView.$select.html('');
    var container = Rooms.retrieve();
    for (let room of container) {
      let current = $(`<option>${room}</option>`);
      RoomsView.$select.append(current);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    let data = Messages.retrieve();
    MessagesView.render(data.filter(message => {
      if (roomname === 'null') {
        return true;
      }
      return message.roomname === roomname;
    }));
  },

  handleChange: event => {
    // var selectedOption = $(this).val();
    RoomsView.renderRoom(event.target.value);
  },

  // handleClick: () => {
  //   var newRoom =
  //   console.log($('#room').text());
  // }

  handleClick: function(event) {
    event.preventDefault();
    var formData = $(this).serializeArray();
    var newRoom = formData[0].value;
    let newOption = $(`<option>${newRoom}</option>`);
    var container = Rooms.retrieve(); // rooms from server
    // only when newoption is not in the room list
    if (!container.has(newRoom)) {
      Rooms.insertOne(newRoom);
      RoomsView.$select.prepend(newOption);
    }

    // avoid duplicate room in the drop down list local;
    console.log(newRoom);
  },

};
