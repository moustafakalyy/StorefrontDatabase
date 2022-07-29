import client from "../database";

import dotenv from "dotenv";

dotenv.config();

export type Order = {
  id?: number;
  users_id: string;
  status: string;
};
export class OrderInfo {
  async index(): Promise<Order[]> {
    try {
      const connection = await client.connect();
      const sql = "SELECT * FROM orders;";
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get the orders ${error}`);
    }
  }

  async show(id: string): Promise<Order> {
    try {
      const connection = await client.connect();
      const sql = `SELECT * FROM orders WHERE id=${id};`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Cannot get order with id :${id}, the following error occured: ${error}`
      );
    }
  }

  async create(order: Order): Promise<Order> {
    try {
      const connection = await client.connect();
      let sql = `INSERT INTO orders (users_id,status) VALUES ('${order.users_id}','${order.status}')`;
      let result = await connection.query(sql);
      sql = `SELECT * FROM orders WHERE users_id='${order.users_id}';`;
      result = await connection.query(sql);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot create order : ${order.users_id}`);
    }
  }
}
