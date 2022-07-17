import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SourceInfoAttributes {
  sourceId: number;
  dirName?: string;
  baseName: string;
  formatName: string;
  dstTable: string;
  size?: number;
  mtime?: number;
}

export type SourceInfoOptionalAttributes = "dirName" | "size" | "mtime";
export type SourceInfoCreationAttributes = Optional<SourceInfoAttributes, SourceInfoOptionalAttributes>;

export class SourceInfo extends Model<SourceInfoAttributes, SourceInfoCreationAttributes> implements SourceInfoAttributes {
  sourceId!: number;
  dirName?: string;
  baseName!: string;
  formatName!: string;
  dstTable!: string;
  size?: number;
  mtime?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof SourceInfo {
    return SourceInfo.init({
    sourceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'source_id'
    },
    dirName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'dir_name'
    },
    baseName: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'base_name'
    },
    formatName: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'format_name'
    },
    dstTable: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'dst_table'
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mtime: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: '_source_info_',
    timestamps: false
  });
  }
}
