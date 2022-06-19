import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { OrderItem, OrderItemId } from './order_item';
import type { Supplier, SupplierId } from './supplier';

export interface ProductAttributes {
  id: number;
  productName: string;
  supplierId: number;
  altSupplierId?: number;
  unitPrice?: number;
  package?: string;
  isDiscontinued: boolean;
}

export type ProductPk = "id";
export type ProductId = Product[ProductPk];
export type ProductOptionalAttributes = "altSupplierId" | "unitPrice" | "package" | "isDiscontinued";
export type ProductCreationAttributes = Optional<ProductAttributes, ProductOptionalAttributes>;

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  id!: number;
  productName!: string;
  supplierId!: number;
  altSupplierId?: number;
  unitPrice?: number;
  package?: string;
  isDiscontinued!: boolean;

  // Product hasMany OrderItem via productId
  orderItems!: OrderItem[];
  getOrderItems!: Sequelize.HasManyGetAssociationsMixin<OrderItem>;
  setOrderItems!: Sequelize.HasManySetAssociationsMixin<OrderItem, OrderItemId>;
  addOrderItem!: Sequelize.HasManyAddAssociationMixin<OrderItem, OrderItemId>;
  addOrderItems!: Sequelize.HasManyAddAssociationsMixin<OrderItem, OrderItemId>;
  createOrderItem!: Sequelize.HasManyCreateAssociationMixin<OrderItem>;
  removeOrderItem!: Sequelize.HasManyRemoveAssociationMixin<OrderItem, OrderItemId>;
  removeOrderItems!: Sequelize.HasManyRemoveAssociationsMixin<OrderItem, OrderItemId>;
  hasOrderItem!: Sequelize.HasManyHasAssociationMixin<OrderItem, OrderItemId>;
  hasOrderItems!: Sequelize.HasManyHasAssociationsMixin<OrderItem, OrderItemId>;
  countOrderItems!: Sequelize.HasManyCountAssociationsMixin;
  // Product belongsTo Supplier via altSupplierId
  altSupplier!: Supplier;
  getAltSupplier!: Sequelize.BelongsToGetAssociationMixin<Supplier>;
  setAltSupplier!: Sequelize.BelongsToSetAssociationMixin<Supplier, SupplierId>;
  createAltSupplier!: Sequelize.BelongsToCreateAssociationMixin<Supplier>;
  // Product belongsTo Supplier via supplierId
  supplier!: Supplier;
  getSupplier!: Sequelize.BelongsToGetAssociationMixin<Supplier>;
  setSupplier!: Sequelize.BelongsToSetAssociationMixin<Supplier, SupplierId>;
  createSupplier!: Sequelize.BelongsToCreateAssociationMixin<Supplier>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Product {
    return Product.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Id'
    },
    productName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      field: 'ProductName'
    },
    supplierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Suppliers',
        key: 'Id'
      },
      field: 'SupplierId'
    },
    altSupplierId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Suppliers',
        key: 'Id'
      },
      field: 'AltSupplierId'
    },
    unitPrice: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true,
      defaultValue: 0,
      field: 'UnitPrice'
    },
    package: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'Package'
    },
    isDiscontinued: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'IsDiscontinued'
    }
  }, {
    sequelize,
    tableName: 'Products',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Products_1",
        unique: true,
        fields: [
          { name: "ProductName" },
        ]
      },
    ]
  });
  }
}
