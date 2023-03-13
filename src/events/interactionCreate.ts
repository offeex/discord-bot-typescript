import { Event } from '../structures/Event'
import { client } from '../index'
import { Command } from '../structures/Command'

export default new Event('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
        const command: Command = client.commands.get(interaction.commandName)
        if (!command) return interaction.reply('Clown :^)')
        command.execute(interaction, client)
    }
})