import { SlashCommandBuilder } from '@discordjs/builders';

//using discordjs builders tool for creating slash commands
const shopCommand = new SlashCommandBuilder()
	.setName('shop')
	.setDescription('Have any gold to purchase?')
	.addStringOption((option) =>
		option
			.setName('buy')
			.setDescription('Purchase items using points')
			.setRequired(true)
			.addChoices(
				{
					name: "Doran blade",
					value: "Doran's blade",
				},
				{
					name: "Doran shield",
					value: "Doran's shield",
				}
			)
	);

export default shopCommand.toJSON();
