import { SlashCommandBuilder } from '@discordjs/builders';

//using discordjs builders tool for creating slash commands
const ownedCommand = new SlashCommandBuilder()
	.setName('owned')
	.setDescription('List of owned items in your inventory')
	
export default ownedCommand.toJSON();