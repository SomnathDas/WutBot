const venom = require('venom-bot');
// import { create, Whatsapp } from 'venom-bot'; [ Another method to import]

/* Remember, after logging-in VENOM will create a folder named "Token" to 
Save authentication details, make sure not to share that folder with anyone
and delete it after using, you can also log-out from whatsapp web from 
your phone to make that KEY invalid but still for safe side.
*/


//Engine
venom.create().then((client) => start(client));

async function start(client) {
	global.XClient = client;

// Keeping session alive
client.onStateChange((state) => {
  console.log(state);
  const conflits = [
    venom.SocketState.CONFLICT,
    venom.SocketState.UNPAIRED,
    venom.SocketState.UNLAUNCHED,
  ];
  if (conflits.includes(state)) {
    client.useHere();
  }
});

//Message Handling
client.onMessage(message => {
	let messagesInOut = require('./messagesInOut.js');
	messagesInOut.message(message);
	delete require.cache[require.resolve('./messagesInOut')];

});
}

