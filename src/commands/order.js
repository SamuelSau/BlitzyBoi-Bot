import { SlashCommandBuilder } from '@discordjs/builders';

//using discordjs builders tool for creating slash commands
const orderCommand = new SlashCommandBuilder()
	.setName('order')
	.setDescription('order something')
	.addStringOption((option) =>
		option
			.setName('food')
			.setDescription('Select favorite food')
			.setRequired(true)
			.addChoices(
				{
					name: 'Cake',
					value: 'cake',
				},
				{
					name: 'Vegetables',
					value: 'vegetables',
				}
			)
	);

export default orderCommand.toJSON();
