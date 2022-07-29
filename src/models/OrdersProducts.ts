import client from "../database";

import dotenv from "dotenv";
import { Product } from "./Product";

dotenv.config();

export type OrderProduct = {
  id?: number;
  order_id: number;
  product_iD: number;
  quantity: number;
};
export class OrderProductInfo {
  async getUserOrderedProducts(id: string): Promise<Product[]> {
    try {
      const connection = await client.connect();
      const sql = `SELECT * FROM products WHERE id IN (SELECT product_iD FROM orders_products WHERE order_id=${id});`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get user's ordered products ${error}`);
    }
  }
  async create(orderProduct: OrderProduct): Promise<OrderProduct> {
    try {
      const connection = await client.connect();

      const sql = ` INSERT INTO orders_products (order_id,product_iD,quantity) VALUES ('${orderProduct.order_id}','${orderProduct.product_iD}','${orderProduct.quantity}')`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot create order`);
    }
  }
}
