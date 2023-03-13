import { Event } from '../structures/Event'
import { client as c } from '../index'

export default new Event('ready', async () => {
    const commands = Array.from(c.commands.values()).map(c => c.data.toJSON())
    const guildId = process.env.GUILD_ID

    if (guildId) await c.guilds.cache.get(guildId).commands.set(commands)
    else await c.application.commands.set(commands)
})