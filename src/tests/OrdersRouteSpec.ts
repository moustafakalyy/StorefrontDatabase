import { app } from "../server";
import supertest from "supertest";
import { tokenTest } from "./OrdersModelSpec";
const request = supertest(app);
describe("Testing Orders route spec", () => {
  it("test the Orders api endpoint", async () => {
    const response = await request
      .get("/orders/1")
      .set("Authorization", "Bearer " + tokenTest);

    expect(response.status).toBe(200);
  });
});
