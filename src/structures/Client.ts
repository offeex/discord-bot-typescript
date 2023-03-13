import { Client, ClientEvents, Collection } from 'discord.js'
import { globSync } from 'glob'
import { Event } from './Event'
import { Command } from './Command'

export class ExtendedClient extends Client {
    public readonly commands: Collection<string, Command> = new Collection()

    constructor() {
        super({ intents: ['Guilds', 'GuildMessages'] })
    }

    public async start() {
        this.loadEvents()
        this.loadCommands()
        this.login(process.env.TOKEN).then(() => console.log('Logged in!'))
    }

    private loadEvents() {
        const files = globSync(`${__dirname}/../events/*.ts`)
        for (const path of files) {
            const { event, execute }: Event<keyof ClientEvents> = require(path).default
            this.on(event, execute)
        }
    }

    private loadCommands() {
        const files = globSync(`${__dirname}/../commands/*/*.ts`)
        for (const path of files) {
            const command: Command = (require(path)).default
            if (!command) continue
            this.commands.set(command.data.name, command)
        }
    }
}