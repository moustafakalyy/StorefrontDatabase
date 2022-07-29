import { OrderProductInfo } from "../models/OrdersProducts";

const orderProductsModel = new OrderProductInfo();

describe("Testing Order Products Model", () => {
  it("Order Products model should have a getUserOrderedProducts method", async () => {
    expect(orderProductsModel.getUserOrderedProducts).toBeDefined();
  });

  it("getUserOrderedProducts method should return all products for the same order", async () => {
    const result = await orderProductsModel.getUserOrderedProducts("1");
    expect(result).toEqual([
      {
        id: 1,
        name: "jeans",
        price: 30,
      },
    ]);
  });
});
