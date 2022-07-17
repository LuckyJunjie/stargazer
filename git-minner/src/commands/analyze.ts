import { Command, Flags } from '@oclif/core';
import GitMinnerDatabase from '../database/git-minner-db';
const getCommits = require("../git/git");
// const MOCK_REPO = '/home/junjie/code/stargazer/mock-project';
const MOCK_REPO = '../../mock-project';

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
    this.log(`Get commits from the path ${MOCK_REPO}`);
    const commits = await getCommits(MOCK_REPO, last, before);
    commits.forEach((com: any) => {
      this.log(`commit.id: ${com.id}`);
      this.log(`commit.date: ${com.date}`);
      this.log(`commit.author: ${com.author}`);
      this.log(`commit.getAuthor: ${this.getAuthor(com.content)}`);
      this.log(`commit.getFetaureId: ${this.getFetaureId(com.content)}`);
      this.log(`commit.getJIRATaskId: ${this.getJIRATaskId(com.content)}`);
    });

    const db = new GitMinnerDatabase();
    db.run().catch(err => console.error(err));
  }

  private getAuthor(content: string): string {
    return this.findSpecificTag(content, 'Author:');
  }

  private getFetaureId(content: string): string {
    return this.findSpecificTag(content, '%Feature-Id');
  }

  private getJIRATaskId(content: string): string {
    return this.findSpecificTag(content, '%Jira-Id:');
  }

  private findSpecificTag(content: string, tag: string): string {
    // return content.split('\n').filter((rowContent: string) => { return rowContent.match(tag) })[0].replace(tag, '').trim();

    let searchTarget :string = content.split('\n').filter((rowContent: string) => { return rowContent.match(tag) })[0];

    if (searchTarget)
    {
      searchTarget = searchTarget.replace(tag, '').trim();
    }
    return searchTarget;

  }
}
