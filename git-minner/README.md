oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g git-minnor
$ git-minnor COMMAND
running command...
$ git-minnor (--version)
git-minnor/0.0.0 linux-x64 node-v16.14.2
$ git-minnor --help [COMMAND]
USAGE
  $ git-minnor COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [oclif-hello-world](#oclif-hello-world)
- [Usage](#usage)
- [Commands](#commands)
  - [`git-minnor hello PERSON`](#git-minnor-hello-person)
  - [`git-minnor hello world`](#git-minnor-hello-world)
  - [`git-minnor help [COMMAND]`](#git-minnor-help-command)
  - [`git-minnor plugins`](#git-minnor-plugins)
  - [`git-minnor plugins:install PLUGIN...`](#git-minnor-pluginsinstall-plugin)
  - [`git-minnor plugins:inspect PLUGIN...`](#git-minnor-pluginsinspect-plugin)
  - [`git-minnor plugins:install PLUGIN...`](#git-minnor-pluginsinstall-plugin-1)
  - [`git-minnor plugins:link PLUGIN`](#git-minnor-pluginslink-plugin)
  - [`git-minnor plugins:uninstall PLUGIN...`](#git-minnor-pluginsuninstall-plugin)
  - [`git-minnor plugins:uninstall PLUGIN...`](#git-minnor-pluginsuninstall-plugin-1)
  - [`git-minnor plugins:uninstall PLUGIN...`](#git-minnor-pluginsuninstall-plugin-2)
  - [`git-minnor plugins update`](#git-minnor-plugins-update)
  - [Run test command](#run-test-command)

## `git-minnor hello PERSON`

Say hello

```
USAGE
  $ git-minnor hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/LuckyJunjie/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `git-minnor hello world`

Say hello world

```
USAGE
  $ git-minnor hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `git-minnor help [COMMAND]`

Display help for git-minnor.

```
USAGE
  $ git-minnor help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for git-minnor.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `git-minnor plugins`

List installed plugins.

```
USAGE
  $ git-minnor plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ git-minnor plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `git-minnor plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ git-minnor plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ git-minnor plugins add

EXAMPLES
  $ git-minnor plugins:install myplugin 

  $ git-minnor plugins:install https://github.com/someuser/someplugin

  $ git-minnor plugins:install someuser/someplugin
```

## `git-minnor plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ git-minnor plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ git-minnor plugins:inspect myplugin
```

## `git-minnor plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ git-minnor plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ git-minnor plugins add

EXAMPLES
  $ git-minnor plugins:install myplugin 

  $ git-minnor plugins:install https://github.com/someuser/someplugin

  $ git-minnor plugins:install someuser/someplugin
```

## `git-minnor plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ git-minnor plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ git-minnor plugins:link myplugin
```

## `git-minnor plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ git-minnor plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ git-minnor plugins unlink
  $ git-minnor plugins remove
```

## `git-minnor plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ git-minnor plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ git-minnor plugins unlink
  $ git-minnor plugins remove
```

## `git-minnor plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ git-minnor plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ git-minnor plugins unlink
  $ git-minnor plugins remove
```

## `git-minnor plugins update`

Update installed plugins.

```
USAGE
  $ git-minnor plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

## Run test command
./bin/dev analyze