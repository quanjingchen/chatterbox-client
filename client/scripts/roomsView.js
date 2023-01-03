// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $input: $('#room'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.unbind();
    RoomsView.$button.unbind();

    Parse.readAll(data => {
      RoomsView.render(data);
    });
    RoomsView.$select.change(RoomsView.handleChange);
    RoomsView.$button.click(RoomsView.handleClick);
  },

  render: function (data) {
    // TODO: Render out the list of rooms.
    data.forEach(tweet => {
      Rooms.add(tweet.roomname);
    });

    RoomsView.$select.html('');
    var container = Rooms.retrieve();
    for (let room of container) {
      let current = $(`<option>${room}</option>`);
      RoomsView.$select.append(current);
    }
  },

  renderRoom: function (roomname) {
    // TODO: Render out a single room.
    let data = Messages.retrieve();
    if (!Rooms.retrieve().has(roomname)) {
      Rooms.add(roomname);
      RoomsView.$select.html('');
      var container = Rooms.retrieve();
      for (let room of container) {
        let current = $(`<option>${room}</option>`);
        RoomsView.$select.append(current);
      }
    }
    if (data !== null) {
      MessagesView.render(data.filter(message => {
        if (roomname === 'null') {
          return true;
        }
        return message.roomname === roomname;
      }));
    }

  },

  handleChange: event => {
    // var selectedOption = $(this).val();
    RoomsView.renderRoom(event.target.value);
    // Rooms.setCurrent(event.target.value);
    console.log('current room: ', event.target.value);
  },

  handleClick: function (event) {
    event.preventDefault();
    var newRoom = RoomsView.$input.val();
    console.log('add new room: ', newRoom);
    let newOption = $(`<option>${newRoom}</option>`);
    var container = Rooms.retrieve(); // rooms from server
    // only when newoption is not in the room list
    if (!container.has(newRoom)) {
      RoomsView.$select.prepend(newOption);
    }
    Rooms.add(newRoom);
  },

};
