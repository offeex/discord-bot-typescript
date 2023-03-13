import { Event } from '../structures/Event'
import { client } from '../index'
import { Command } from '../structures/Command'

export default new Event('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return

    const command: Command = client.commands.get(interaction.commandName)
    if (!command) return interaction.followUp({ content: 'Clown :^)' })

    command.execute(interaction)
})