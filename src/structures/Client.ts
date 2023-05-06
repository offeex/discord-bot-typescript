import {Client, Collection, Guild} from 'discord.js'
import {Command} from './Command'
import Button from "./Button";
import Modal from "./Modal";
import {load} from "../utils/load.util";

export class ExtendedClient extends Client {
  public readonly commands: Collection<string, Command> = new Collection()
  public readonly buttons: Collection<string, Button> = new Collection()
  public readonly modals: Collection<string, Modal> = new Collection()
  public guild: Guild | undefined

  constructor() {
    super({intents: ['Guilds', 'GuildMessages', 'MessageContent']})
  }

  public async start() {
    load(this)
    this.login(process.env.TOKEN).then(() => console.log('Logged in!'))

    this.guild = await this.guilds.fetch(process.env.GUILD_ID!)
    if (!this.guild) throw new Error('Guild not found')

  }
}