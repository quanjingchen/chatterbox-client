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

  render: function() {
    // TODO: Render _all_ the messages.
    // Clear html elements
    MessagesView.$chats.html('');

    var data = Messages.retrieveAll();
    for (var item of data) {
      MessagesView.renderMessage(item);
    }

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var item = MessageView.render(message);
    MessagesView.$chats.append(item);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};