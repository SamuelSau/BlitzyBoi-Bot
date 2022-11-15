import { SlashCommandBuilder } from '@discordjs/builders';

//using discordjs builders tool for creating slash commands
const buyCommand = new SlashCommandBuilder()
	.setName('buy')
	.setDescription('Purchase items for shop');

export default buyCommand.toJSON();
