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
    data.forEach(message => {
      MessagesView.renderMessage(message);
    })
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let $message = $('<div class="message"></div>');
    $message.text(message.text);
    $('#chats').append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};