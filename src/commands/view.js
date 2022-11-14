import { SlashCommandBuilder } from '@discordjs/builders';

//using discordjs builders tool for creating slash commands
const viewCommand = new SlashCommandBuilder()
	.setName('view')
	.setDescription('Display list of available shop items')

export default viewCommand.toJSON();
