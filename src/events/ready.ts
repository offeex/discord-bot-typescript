import {Event} from '../structures/Event'
import {client} from '../index'

export default new Event('ready', async () => {
  const commands = Array.from(client.commands.values()).map(c => c.data)
  const guildId = process.env.GUILD_ID

  if (guildId) {
    const guild = await client.guilds.fetch(guildId)
    await guild.commands.set(commands)
  } else await client.application?.commands.set(commands)
})