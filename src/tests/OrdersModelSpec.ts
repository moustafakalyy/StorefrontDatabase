import jwt, { Secret } from "jsonwebtoken";
import { OrderInfo } from "../models/Orders";
import { OrderProductInfo } from "../models/OrdersProducts";
import { ProductInfo } from "../models/Product";
import { UserInfo } from "../models/User";

const orderModel = new OrderInfo();
const usersModel = new UserInfo();
const productModel = new ProductInfo();
const orderProductModel = new OrderProductInfo();

export let user1Password: string;
export let user2Password: string;
export let user3Password: string;
export let tokenTest: string;
describe("Testing Orders Model", () => {
  beforeAll(async () => {
    const user1 = await usersModel.create({
      firstname: "ali",
      lastname: "yasser",
      password: "25512",
    });
    user1Password = user1.password;
    const user2 = await usersModel.create({
      firstname: "khaled",
      lastname: "yasser",
      password: "4545",
    });

    const user3 = await usersModel.create({
      firstname: "ibrahim",
      lastname: "yasser",
      password: "4545",
    });

    user2Password = user2.password;
    user3Password = user3.password;
    const product1 = await productModel.create({
      name: "jeans",
      price: 30,
    });
    const product2 = await productModel.create({
      name: "cap",
      price: 50,
    });

    const order1 = await orderModel.create({ users_id: "1", status: "active" });
    const order2 = await orderModel.create({ users_id: "2", status: "active" });
    const orderProduct1 = await orderProductModel.create({
      order_id: 1,
      product_iD: 1,
      quantity: 2,
    });

    const secret = process.env.TOKEN_SECRET as Secret;
    tokenTest = jwt.sign(user1, secret);
  });
  it("Orders model should have a create method", async () => {
    expect(orderModel.create).toBeDefined();
  });

  it("Orders model should have a show method", async () => {
    expect(orderModel.show).toBeDefined();
  });

  it("Orders model should have a index method", async () => {
    expect(orderModel.index).toBeDefined();
  });

  it("Index method should return all orders", async () => {
    const result = await orderModel.index();
    expect(result).toEqual([
      {
        id: 1,
        users_id: "1",
        status: "active",
      },
      {
        id: 2,
        users_id: "2",
        status: "active",
      },
    ]);
  });

  it("show method should return specific order by id", async () => {
    const result = await orderModel.show("1");
    expect(result).toEqual({
      id: 1,
      users_id: "1",
      status: "active",
    });
  });

  it("create method should create new order", async () => {
    const result = await orderModel.create({
      users_id: "3",
      status: "active",
    });
    expect(result).toEqual({
      id: 3,
      users_id: "3",
      status: "active",
    });
  });
});
