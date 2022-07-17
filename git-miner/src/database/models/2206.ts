import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface 2206Attributes {
  ca?: string;
  fa?: string;
  jiraFeatureId?: string;
  'fs2Estimation的总和'?: number;
  'loggedEffort的总和'?: number;
  fs2EeFactor?: number;
  fs2EeQuality?: number;
  'accurateFeature的总和'?: number;
  'counter的总和'?: number;
  'itemToBeExcluded的总和'?: number;
}

export type 2206OptionalAttributes = "ca" | "fa" | "jiraFeatureId" | "fs2Estimation的总和" | "loggedEffort的总和" | "fs2EeFactor" | "fs2EeQuality" | "accurateFeature的总和" | "counter的总和" | "itemToBeExcluded的总和";
export type 2206CreationAttributes = Optional<2206Attributes, 2206OptionalAttributes>;

export class 2206 extends Model<2206Attributes, 2206CreationAttributes> implements 2206Attributes {
  ca?: string;
  fa?: string;
  jiraFeatureId?: string;
  'fs2Estimation的总和'?: number;
  'loggedEffort的总和'?: number;
  fs2EeFactor?: number;
  fs2EeQuality?: number;
  'accurateFeature的总和'?: number;
  'counter的总和'?: number;
  'itemToBeExcluded的总和'?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof 2206 {
    return 2206.init({
    ca: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'CA'
    },
    fa: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'FA'
    },
    jiraFeatureId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'JIRA Feature ID'
    },
    'fs2Estimation的总和': {
      type: DataTypes.REAL,
      allowNull: true,
      field: 'FS2_Estimation 的总和'
    },
    'loggedEffort的总和': {
      type: DataTypes.REAL,
      allowNull: true,
      field: 'LoggedEffort 的总和'
    },
    fs2EeFactor: {
      type: DataTypes.REAL,
      allowNull: true,
      field: 'FS2EE Factor'
    },
    fs2EeQuality: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'FS2EE Quality'
    },
    'accurateFeature的总和': {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Accurate_Feature 的总和'
    },
    'counter的总和': {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Counter 的总和'
    },
    'itemToBeExcluded的总和': {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Item ToBeExcluded 的总和'
    }
  }, {
    sequelize,
    tableName: '2206',
    timestamps: false
  });
  }
}
