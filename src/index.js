import { Client, ClientPresence, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

//invoke config function for environment variables
config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const TOKEN = process.env.BOT_TOKEN;

//listens to events
//event, callback function / event handler function
client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
});

client.on('messageCreate', (message) => {
	console.log(message.content);
});

client.login(TOKEN);
