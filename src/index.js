import { Client, GatewayIntentBits } from 'discord.js';
import {config} from 'dotenv'

//invoke config function for environment variables
config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const TOKEN = process.env.BOT_TOKEN;

client.login(TOKEN);

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
