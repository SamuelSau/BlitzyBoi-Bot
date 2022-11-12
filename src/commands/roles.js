import { SlashCommandBuilder } from '@discordjs/builders';

//adds a new role by creating slash command
const rolesCommand = new SlashCommandBuilder()
	.setName('addrole')
	.setDescription('Add a role')
	.addRoleOption((option) =>
		option
			.setName('newrole')
			.setDescription('Adds a new role')
			.setRequired(true)
	);

export default rolesCommand.toJSON();
