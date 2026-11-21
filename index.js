require('dotenv').config();
const { Events } = require('discord.js');

const { TOKEN, CLIENT_ID, CLIENT_SECRET } = process.env;
if (!TOKEN || !CLIENT_ID || TOKEN.includes('حط_') || CLIENT_ID.includes('حط_')) {
  console.error('❌ لازم تملا TOKEN و CLIENT_ID في ملف .env');
  process.exit(1);
}

const client = require('./src/client');
require('./src/bot');

client.once(Events.ClientReady, () => {
  if (!CLIENT_SECRET || CLIENT_SECRET.includes('حط_')) {
    console.warn('⚠️ CLIENT_SECRET مش متحط في .env — الداش بورد مش هيشتغل (البوت شغال عادي).');
    return;
  }
  require('./src/dashboard/server').start(client);
});

client.login(TOKEN);
