const execa = require("execa");
const pather = require("path");

async function getCommits(path: string, last: number, before: number | null) {
  const format = `{"hash":"%h","author":{"login":"%aN"},"date":"%ad"},`;
  // for exmaple: git log --max-count=11 --pretty=format:{"hash":"%h","author":{"login":"%aN"},"date":"%ad"}, --date=iso HEAD -- doc/design/architecture.puml
  const { stdout } = await execa(
    "git",
    [
      "log",
      `--max-count=${before ? last + 1 : last}`,
      `--pretty=format:${format}`,
      "--date=iso",
      `${before || "HEAD"}`
    ],
    { cwd: path }
  );
  const json = `[${stdout.slice(0, -1)}]`;

  const messagesOutput = await execa(
    "git",
    [
      "log",
      `--max-count=${last}`,
      `--pretty=format:%s`,
      `${before || "HEAD"}`,
      "--",
      pather.basename(path)
    ],
    { cwd: path }
  );

  const messages = messagesOutput.stdout.replace('"', '\\"').split(/\r?\n/);

  const result = JSON.parse(json).map((commit: any, i: number) => ({
    ...commit,
    id: i,
    date: new Date(commit.date),
    message: messages[i]
  }));

  return before ? result.slice(1) : result;
}

async function getContent(commit: any, path: string) {
  const { stdout } = await execa(
    "git",
    ["show", `${commit.hash}`],
    { cwd: path }
  );
  return stdout;
}

module.exports = async function (path: string, last: number, before: number | null) {
  const commits = await getCommits(path, last, before);
  await Promise.all(
    commits.map(async (commit: { content: any; }) => {
      commit.content = await getContent(commit, path);
    })
  );
  return commits;
};
