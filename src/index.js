import { Client, ClientPresence, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import { Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import {SlashCommandBuilder} from '@discordjs/builders'
//invoke config function for environment variables
config();

//declaring intents for what the bot can do
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

//environment variables
const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const rest = new REST({ version: '10' }).setToken(TOKEN);

//bot interaction with the slash commands
client.on('interactionCreate', (interaction) => {
	if (interaction.isChatInputCommand()) {
		interaction.reply({
			content: `You ordered ${interaction.options.get('buy').value}`,
		});
	}
});

//event listener
//params: (event, callback function/event handler function)
client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
});
client.login(TOKEN);

//returns custom slash commands to Discord server
async function main() {
	const commands = [
		{
			name: 'shop',
			description: 'You got gold?',
			options: [
				{
					name: 'buy',
					description: 'Want to buy something?',
					type: 3,
					required: true,
					choices: [
						{
							name: 'Cake',
							value: 'cake_value',
						},
						{
							name: 'Burger',
							value: 'burger_value',
						},
					],
				},
			],
		},

		{
			name: 'bet',
			description: 'Bet on red side',
		},
		{
			name: 'info',
			description: 'Receive player stats',
		},
	];

	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationCommands(CLIENT_ID, GUILD_ID), {
			body: commands,
		});

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
}

main();
