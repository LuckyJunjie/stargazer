import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CommitAttributes {
  id: number;
  authorId: number;
  reviewerId: number;
  featureId?: number;
  jiraId?: number;
  message?: string;
}

export type CommitPk = "id";
export type CommitId = Commit[CommitPk];
export type CommitOptionalAttributes = "featureId" | "jiraId" | "message";
export type CommitCreationAttributes = Optional<CommitAttributes, CommitOptionalAttributes>;

export class Commit extends Model<CommitAttributes, CommitCreationAttributes> implements CommitAttributes {
  id!: number;
  authorId!: number;
  reviewerId!: number;
  featureId?: number;
  jiraId?: number;
  message?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Commit {
    return Commit.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'author_id'
    },
    reviewerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'reviewer_id'
    },
    featureId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'feature_id'
    },
    jiraId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'jira_id'
    },
    message: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'commits',
    timestamps: false
  });
  }
}
