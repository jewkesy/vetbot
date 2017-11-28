var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var config = require('./../ui/config.js');
var console = require('tracer').colorConsole();
// Set up Conversation service.
var conversation = new ConversationV1({
  username: config.api.user, // replace with username from service key
  password: config.api.password, // replace with password from service key
  path: { workspace_id: config.api.workspaceId }, // replace with workspace ID
  version_date: '2017-05-26'
});

// Start conversation with empty message.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }
  console.debug(response)
  // If an intent was detected, log it out to the console.
  if (response.intents.length > 0) {
    console.log('Detected intent: #' + response.intents[0].intent);
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
	  for (var i=0; i<response.output.text.length; i++) {
	  	console.log(response.output.text[i]);
	  }
	}
  // Prompt for the next round of input.
    var newMessageFromUser = prompt('>> ', {});
    // Send back the context to maintain state.
    conversation.message({
      input: { text: newMessageFromUser },
      context : response.context,
    }, processResponse)
}

