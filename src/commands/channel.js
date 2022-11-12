import { SlashCommandBuilder } from '@discordjs/builders';

//adds a new role by creating slash command
const channelCommand = new SlashCommandBuilder()
	.setName('channel')
	.setDescription('Add channel')
	.addChannelOption((option) =>
		option
			.setName('channeloption')
			.setDescription('Adding channel option')
			.setRequired(true)
	);

export default channelCommand.toJSON();