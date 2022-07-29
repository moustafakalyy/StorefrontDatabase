import express from "express";
import { Order, OrderInfo } from "../models/Orders";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
const orders = express.Router();
dotenv.config();

orders.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET as Secret);
  } catch (error) {
    res.status(400);
    res.json(error);
    return;
  }
  try {
    const orderModel = new OrderInfo();
    const response = await orderModel.index();
    res.json(response);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

orders.get("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET as Secret);
  } catch (error) {
    res.status(400);
    res.json(error);
    return;
  }

  try {
    const orderModel = new OrderInfo();
    const response = await orderModel.show(req.params.id);
    res.json(response);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

orders.post("/", async (req: express.Request, res: express.Response) => {
  const order: Order = {
    users_id: req.body.users_id,
    status: req.body.status,
  };

  try {
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET as Secret);
  } catch (error) {
    res.status(400);
    res.json(error);
    return;
  }

  try {
    const orderModel = new OrderInfo();
    await orderModel.create(order);
    res.send("order added");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

export default orders;
