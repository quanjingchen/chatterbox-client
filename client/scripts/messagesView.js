// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.render();
    // MessagesView.$chats.html('<p>Loading messages</p>');

  },

  render: function (data) {
    // TODO: Render _all_ the messages.

    MessagesView.$chats.html('');
    data.forEach(message => {
      MessagesView.renderMessage(message);
    });
    $('span.username').on('click', MessagesView.handleClick);
  },

  renderMessage: function (message) {
    // TODO: Render a single message.

    var $message = MessageView.render({
      username: MessagesView.encodeHTML(message.username),
      text: MessagesView.encodeHTML(message.text),
      time: message.updated_at
    });

    if (Friends.toggleStatus(message.username)) {
      $message = $message.replace('chat', 'chat friend');
    }
    $('#chats').append($message);
  },

  encodeHTML: function (text) {
    if (text === null) {
      return text;
    } else {
      return text.replace(/[<>&'"]/g, function (c) {
        switch (c) {
          case '<': return '&lt;';
          case '>': return '&gt;';
          case '&': return '&amp;';
          case '\'': return '&#39;';
          case '"': return '&quot;';
        }
      });
    }
  },

  handleClick: function (e) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var friend = e.target.innerText;
    Friends.add(friend);
    // let data = Messages.retrieve();
    // MessagesView.render(data);
    var currentRoom = $("select :selected").text();
    RoomsView.renderRoom(currentRoom);
  }

};