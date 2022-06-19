import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Customer, CustomerId } from './customer';
import type { OrderItem, OrderItemId } from './order_item';

export interface OrderAttributes {
  id: number;
  orderDate: Date;
  orderNumber?: string;
  customerId: number;
  totalAmount?: number;
  status: string;
}

export type OrderPk = "id";
export type OrderId = Order[OrderPk];
export type OrderOptionalAttributes = "orderDate" | "orderNumber" | "totalAmount" | "status";
export type OrderCreationAttributes = Optional<OrderAttributes, OrderOptionalAttributes>;

export class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
  id!: number;
  orderDate!: Date;
  orderNumber?: string;
  customerId!: number;
  totalAmount?: number;
  status!: string;

  // Order belongsTo Customer via customerId
  customer!: Customer;
  getCustomer!: Sequelize.BelongsToGetAssociationMixin<Customer>;
  setCustomer!: Sequelize.BelongsToSetAssociationMixin<Customer, CustomerId>;
  createCustomer!: Sequelize.BelongsToCreateAssociationMixin<Customer>;
  // Order hasMany OrderItem via orderId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Order {
    return Order.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'Id'
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      unique: true,
      field: 'OrderDate'
    },
    orderNumber: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: true,
      field: 'OrderNumber'
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customers',
        key: 'Id'
      },
      unique: true,
      field: 'CustomerId'
    },
    totalAmount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true,
      defaultValue: 0,
      field: 'TotalAmount'
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "UNKNOWN",
      field: 'Status'
    }
  }, {
    sequelize,
    tableName: 'Orders',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Orders_1",
        unique: true,
        fields: [
          { name: "CustomerId" },
          { name: "OrderDate" },
          { name: "OrderNumber" },
        ]
      },
      {
        name: "sqlite_autoindex_Orders_2",
        unique: true,
        fields: [
          { name: "OrderNumber" },
        ]
      },
    ]
  });
  }
}
