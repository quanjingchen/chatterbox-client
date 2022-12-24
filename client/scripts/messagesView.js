// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.render();
    MessagesView.$chats.html('<p>Loading messages</p>');
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
<<<<<<< HEAD
    MessagesView.$chats.html('');
    data.forEach(message => {
      MessagesView.renderMessage(message);
    });
=======
    // Clear html elements
    MessagesView.$chats.html('');

    var data = Messages.retrieveAll();
    for (var item of data) {
      MessagesView.renderMessage(item);
    }

>>>>>>> solo
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
<<<<<<< HEAD
    let $message = MessageView.render({
      username: message.username,
      text: message.text,
      time: message.createdAt
    });

    $('#chats').append($message);
=======
    var item = MessageView.render(message);
    MessagesView.$chats.append(item);
>>>>>>> solo
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};