import { SlashCommandBuilder } from '@discordjs/builders';

//adds a new role by creating slash command
const usersCommand = new SlashCommandBuilder()
	.setName('users')
	.setDescription('Add user options')
	.addRoleOption((option) =>
		option
			.setName('useroption')
			.setDescription('Adding user option')
			.setRequired(true)
	);

export default usersCommand.toJSON();