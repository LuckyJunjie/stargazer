import type { Sequelize } from "sequelize";
import { Commit as _Commit } from "./commit";
import type { CommitAttributes, CommitCreationAttributes } from "./commit";

export {
  _Commit as Commit,
};

export type {
  CommitAttributes,
  CommitCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Commit = _Commit.initModel(sequelize);


  return {
    Commit: Commit,
  };
}
