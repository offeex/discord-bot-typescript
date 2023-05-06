import {ButtonInteraction} from 'discord.js'

export default class Button {
  constructor(
      public customId: string | string[],
      public execute: (interaction: ButtonInteraction) => Promise<any> | any
  ) {
  }
}