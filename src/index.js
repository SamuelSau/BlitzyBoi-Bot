import { ButtonStyle, Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import { Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import shopCommand from './commands/shop.js';
import betCommand from './commands/bet.js';
import { ActionRowBuilder, ButtonBuilder } from '@discordjs/builders';

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
	// if (interaction.isChatInputCommand()) {
	// 	if (interaction.commandName == 'order') {
	// 		interaction.reply({
	// 			content: `The particular command you called was ${
	// 				interaction.options.get('food').value
	// 			} command`,
	// 		});
	// 	}
	// }

	//betting team interaction
	if (interaction.commandName == 'bet') {
		interaction.reply({
			content: 'Choose your winner',
			components: [
				new ActionRowBuilder().setComponents(
					new ButtonBuilder()
						.setCustomId('button1')
						.setLabel('Red Team')
						.setStyle(ButtonStyle.Danger),
					new ButtonBuilder()
						.setCustomId('button2')
						.setLabel('Blue Team')
						.setStyle(ButtonStyle.Primary)
				),
			],
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
	const commands = [shopCommand, betCommand];

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
