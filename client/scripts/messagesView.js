// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.html('');
    data.forEach(message => {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let $message = MessageView.render({
      username: message.username,
      text: message.text,
      time: message.createdAt
    });

    $('#chats').append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};