// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form#send'),

  initialize: function() {
    FormView.$form.unbind();
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var messageContent = $('#message').val();
    console.log('message: ', messageContent);
    console.log('usename: ', App.username);
    console.log('room: ', RoomsView.$select.val());
    var message = {
      text: messageContent,
      username: App.username,
      roomname: RoomsView.$select.val()
    };
    Parse.create(message);
    console.log('click!');
    App.initialize();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};