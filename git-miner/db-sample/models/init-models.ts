import type { Sequelize } from "sequelize";
import { Customer as _Customer } from "./customer";
import type { CustomerAttributes, CustomerCreationAttributes } from "./customer";
import { OrderItem as _OrderItem } from "./order_item";
import type { OrderItemAttributes, OrderItemCreationAttributes } from "./order_item";
import { Order as _Order } from "./order";
import type { OrderAttributes, OrderCreationAttributes } from "./order";
import { Product as _Product } from "./product";
import type { ProductAttributes, ProductCreationAttributes } from "./product";
import { Supplier as _Supplier } from "./supplier";
import type { SupplierAttributes, SupplierCreationAttributes } from "./supplier";

export {
  _Customer as Customer,
  _OrderItem as OrderItem,
  _Order as Order,
  _Product as Product,
  _Supplier as Supplier,
};

export type {
  CustomerAttributes,
  CustomerCreationAttributes,
  OrderItemAttributes,
  OrderItemCreationAttributes,
  OrderAttributes,
  OrderCreationAttributes,
  ProductAttributes,
  ProductCreationAttributes,
  SupplierAttributes,
  SupplierCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Customer = _Customer.initModel(sequelize);
  const OrderItem = _OrderItem.initModel(sequelize);
  const Order = _Order.initModel(sequelize);
  const Product = _Product.initModel(sequelize);
  const Supplier = _Supplier.initModel(sequelize);

  Order.belongsTo(Customer, { as: "customer", foreignKey: "customerId"});
  Customer.hasMany(Order, { as: "orders", foreignKey: "customerId"});
  OrderItem.belongsTo(Order, { as: "order", foreignKey: "orderId"});
  Order.hasMany(OrderItem, { as: "orderItems", foreignKey: "orderId"});
  OrderItem.belongsTo(Product, { as: "product", foreignKey: "productId"});
  Product.hasMany(OrderItem, { as: "orderItems", foreignKey: "productId"});
  Product.belongsTo(Supplier, { as: "altSupplier", foreignKey: "altSupplierId"});
  Supplier.hasMany(Product, { as: "products", foreignKey: "altSupplierId"});
  Product.belongsTo(Supplier, { as: "supplier", foreignKey: "supplierId"});
  Supplier.hasMany(Product, { as: "supplierProducts", foreignKey: "supplierId"});

  return {
    Customer: Customer,
    OrderItem: OrderItem,
    Order: Order,
    Product: Product,
    Supplier: Supplier,
  };
}
