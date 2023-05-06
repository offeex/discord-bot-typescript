import {CommandInteraction,} from 'discord.js'

export type CommandExecute<T extends CommandInteraction> = (interaction: T) => any

export abstract class Command {
  public abstract data: any
  public abstract execute: CommandExecute<any>
}
