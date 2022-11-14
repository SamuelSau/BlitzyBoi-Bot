import { SlashCommandBuilder } from '@discordjs/builders';

//using discordjs builders tool for creating slash commands
const betCommand = new SlashCommandBuilder()
	.setName('bet')
	.setDescription('Which side will you choose?');

export default betCommand.toJSON();
