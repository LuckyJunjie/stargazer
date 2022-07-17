import type { Sequelize } from "sequelize";
import { Overview as _Overview } from "./overview";
import type { OverviewAttributes, OverviewCreationAttributes } from "./overview";
import { Sheet1 as _Sheet1 } from "./sheet_1";
import type { Sheet1Attributes, Sheet1CreationAttributes } from "./sheet_1";
import { SourceInfo as _SourceInfo } from "./source_info";
import type { SourceInfoAttributes, SourceInfoCreationAttributes } from "./source_info";
import { Commit as _Commit } from "./commit";
import type { CommitAttributes, CommitCreationAttributes } from "./commit";

export {
  _Overview as Overview,
  _Sheet1 as Sheet1,
  _SourceInfo as SourceInfo,
  _Commit as Commit,
};

export type {
  OverviewAttributes,
  OverviewCreationAttributes,
  Sheet1Attributes,
  Sheet1CreationAttributes,
  SourceInfoAttributes,
  SourceInfoCreationAttributes,
  CommitAttributes,
  CommitCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Overview = _Overview.initModel(sequelize);
  const Sheet1 = _Sheet1.initModel(sequelize);
  const SourceInfo = _SourceInfo.initModel(sequelize);
  const Commit = _Commit.initModel(sequelize);


  return {
    Overview: Overview,
    Sheet1: Sheet1,
    SourceInfo: SourceInfo,
    Commit: Commit,
  };
}
