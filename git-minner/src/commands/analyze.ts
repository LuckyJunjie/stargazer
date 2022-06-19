import { Command, Flags } from '@oclif/core';
import GitMinnerDatabase from '../database/git-minner-db';
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
      this.log(this.getAuthor(com.content));
      this.log(this.getFetaureId(com.content));
      this.log(this.getJIRATaskId(com.content));
    });

    const db = new GitMinnerDatabase();
    db.run().catch(err => console.error(err));
  }

  private getAuthor(content: string): string {
    return this.findSpecificTag(content, 'Author:');
  }

  private getFetaureId(content: string): string {
    return this.findSpecificTag(content, 'FEATURE_ID:');
  }

  private getJIRATaskId(content: string): string {
    return this.findSpecificTag(content, 'JIRA_ID:');
  }

  private findSpecificTag(content: string, tag: string): string {
    return content.split('\n').filter((rowContent: string) => { return rowContent.match(tag) })[0].replace(tag, '').trim();
  }
}
