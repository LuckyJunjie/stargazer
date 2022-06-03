import { Command } from '@oclif/core';

const getCommits = require("../../git/git");

const MOCK_REPO = '/home/junjie/code/stargazer/mock-project';

export default class World extends Command {
  static description = 'Say hello world'

  static examples = [
    `$ oex hello world
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  static args = []

  async run(): Promise<void> {
    this.log('hello world! (./src/commands/hello/world.ts)');
    const last = 10, before = null;
    const path = '';
    const commits = await getCommits(MOCK_REPO, last, before);
    commits.forEach((com: any) => {

      this.log(com.id);
      this.log(com.date);
      this.log(com.author);
      this.log(com.content);
    });
  }
}
