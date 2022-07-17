import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface OverviewAttributes {
  fs2EeUiTarget?: string;
  '02'?: string;
  '021'?: string;
  '022'?: string;
  '023'?: string;
  '024'?: string;
  '025'?: string;
  '0231'?: string;
  '0232'?: string;
  '0233'?: string;
  '0234'?: string;
  '0235'?: string;
  '0236'?: string;
}

export type OverviewOptionalAttributes = "fs2EeUiTarget" | "02" | "021" | "022" | "023" | "024" | "025" | "023" | "0231" | "0232" | "0233" | "0234" | "0235" | "0236";
export type OverviewCreationAttributes = Optional<OverviewAttributes, OverviewOptionalAttributes>;

export class Overview extends Model<OverviewAttributes, OverviewCreationAttributes> implements OverviewAttributes {
  fs2EeUiTarget?: string;
  '02'?: string;
  '021'?: string;
  '022'?: string;
  '023'?: string;
  '024'?: string;
  '025'?: string;
  '0231'?: string;
  '0232'?: string;
  '0233'?: string;
  '0234'?: string;
  '0235'?: string;
  '0236'?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Overview {
    return Overview.init({
    fs2EeUiTarget: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'FS2EE UI Target'
    },
    '02': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.2'
    },
    '021': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.2_1'
    },
    '022': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.2_2'
    },
    '023': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.2_3'
    },
    '024': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.2_4'
    },
    '025': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.2_5'
    },
    '0231': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.23_1'
    },
    '0232': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.23_2'
    },
    '0233': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.23_3'
    },
    '0234': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.23_4'
    },
    '0235': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.23_5'
    },
    '0236': {
      type: DataTypes.TEXT,
      allowNull: true,
      field: '0.23_6'
    }
  }, {
    sequelize,
    tableName: 'Overview',
    timestamps: false
  });
  }
}
