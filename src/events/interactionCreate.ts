import {Event} from '../structures/Event'
import {client} from '../index'

export default new Event('interactionCreate', async interaction => {
  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName)

    if (!command) return await interaction.reply({
      content: 'Invalid command!',
      ephemeral: true,
    })

    command.execute(interaction)
  } else if (interaction.isButton()) {
    const button = client.buttons.get(interaction.customId)
    if (!button) return
    button.execute(interaction)
  } else if (interaction.isModalSubmit()) {
    const modal = client.modals.get(interaction.customId)
    if (!modal) return
    modal.execute(interaction)
  }
})