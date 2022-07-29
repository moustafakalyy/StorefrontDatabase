import { app } from "../server";
import supertest from "supertest";
import { tokenTest } from "./OrdersModelSpec";
const request = supertest(app);
describe("Testing Users route spec", () => {
  it("test the Users api endpoint index", async () => {
    const response = await request
      .get("/users")
      .set("Authorization", "Bearer " + tokenTest);

    expect(response.status).toBe(200);
  });

  it("test the Users api endpoint show", async () => {
    const response = await request
      .get("/users/1")
      .set("Authorization", "Bearer " + tokenTest);

    expect(response.status).toBe(200);
  });

  it("test the Users api endpoint create", async () => {
    const response = await request
      .post("/users")
      .set("Authorization", "Bearer " + tokenTest)
      .send({
        firstname: "ibrahim",
        lastname: "yasser",
        password: "4545",
      });

    expect(response.status).toBe(200);
  });
});
