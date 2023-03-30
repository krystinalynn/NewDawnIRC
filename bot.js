// Require the libraries
var irc = require('irc');
var Filter = require('bad-words');

// Create a filter instance
var filter = new Filter();

// Create a configuration object
var config = {
  channels: ['#krystilynn', '#development', '#usa'], // The channels to join
  server: 'irc.undernet.org', // The IRC server
  botName: 'NewDawnIRC' // The bot name
};

// Create a bot instance
var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

// Listen for any message in any channel
bot.addListener('message#', async function (from, to, message) {
  // Check if the message contains profanity
  if (filter.isProfane(message)) {
    // Kick the user from the channel
    bot.send('KICK', to, from, 'Watch your language!');
    // Do some other async operation
    await someAsyncFunction();
  }
});
