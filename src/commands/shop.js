import { SlashCommandBuilder } from '@discordjs/builders';

//using discordjs builders tool for creating slash commands
const shopCommand = new SlashCommandBuilder()
	.setName('shop')
	.setDescription('List of shop commands')
	.addSubcommand((subcommand) =>
		subcommand
			.setName('buy')
			.setDescription('Purchase an item in the shop')
			.addStringOption((option) => option.setName('doran').setDescription("Doran's Blade"))
	)
	//option.setName("Doran's Shield").setDescription("+80 HP, +6 HP per 5 secs"))
	.addSubcommand((subcommand) =>
		subcommand
			.setName('view')
			.setDescription('Check all the available items in the shop')
	);

export default shopCommand.toJSON();
