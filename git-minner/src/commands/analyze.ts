import { Command, Flags } from '@oclif/core';
const getCommits = require("../git/git");
const MOCK_REPO = '/home/junjie/code/stargazer/mock-project';

export default class Analyze extends Command {
  static description = 'describe the command here';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
  };

  static args = [{ name: 'file' }];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Analyze);

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from /home/junjie/code/stargazer/git-minner/src/commands/analyze.ts`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }

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
