import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CommitAttributes {
  id: number;
  message: string;
  author: string;
  featureId?: string;
  loc?: string;
  reviewer?: string;
}

export type CommitPk = "id";
export type CommitId = Commit[CommitPk];
export type CommitOptionalAttributes = "featureId" | "loc" | "reviewer";
export type CommitCreationAttributes = Optional<CommitAttributes, CommitOptionalAttributes>;

export class Commit extends Model<CommitAttributes, CommitCreationAttributes> implements CommitAttributes {
  id!: number;
  message!: string;
  author!: string;
  featureId?: string;
  loc?: string;
  reviewer?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Commit {
    return Commit.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Id'
    },
    message: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'Message'
    },
    author: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'Author'
    },
    featureId: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'FeatureId'
    },
    loc: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'Loc'
    },
    reviewer: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Commits',
    timestamps: false
  });
  }
}
