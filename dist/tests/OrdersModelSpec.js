"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenTest = exports.user3Password = exports.user2Password = exports.user1Password = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var Orders_1 = require("../models/Orders");
var OrdersProducts_1 = require("../models/OrdersProducts");
var Product_1 = require("../models/Product");
var User_1 = require("../models/User");
var orderModel = new Orders_1.OrderInfo();
var usersModel = new User_1.UserInfo();
var productModel = new Product_1.ProductInfo();
var orderProductModel = new OrdersProducts_1.OrderProductInfo();
describe("Testing Orders Model", function () {
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var user1, user2, user3, product1, product2, order1, order2, orderProduct1, secret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usersModel.create({
                        firstname: "ali",
                        lastname: "yasser",
                        password: "25512",
                    })];
                case 1:
                    user1 = _a.sent();
                    exports.user1Password = user1.password;
                    return [4 /*yield*/, usersModel.create({
                            firstname: "khaled",
                            lastname: "yasser",
                            password: "4545",
                        })];
                case 2:
                    user2 = _a.sent();
                    return [4 /*yield*/, usersModel.create({
                            firstname: "ibrahim",
                            lastname: "yasser",
                            password: "4545",
                        })];
                case 3:
                    user3 = _a.sent();
                    exports.user2Password = user2.password;
                    exports.user3Password = user3.password;
                    return [4 /*yield*/, productModel.create({
                            name: "jeans",
                            price: 30,
                        })];
                case 4:
                    product1 = _a.sent();
                    return [4 /*yield*/, productModel.create({
                            name: "cap",
                            price: 50,
                        })];
                case 5:
                    product2 = _a.sent();
                    return [4 /*yield*/, orderModel.create({ users_id: "1", status: "active" })];
                case 6:
                    order1 = _a.sent();
                    return [4 /*yield*/, orderModel.create({ users_id: "2", status: "active" })];
                case 7:
                    order2 = _a.sent();
                    return [4 /*yield*/, orderProductModel.create({
                            order_id: 1,
                            product_iD: 1,
                            quantity: 2,
                        })];
                case 8:
                    orderProduct1 = _a.sent();
                    secret = process.env.TOKEN_SECRET;
                    exports.tokenTest = jsonwebtoken_1.default.sign(user1, secret);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Orders model should have a create method", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(orderModel.create).toBeDefined();
            return [2 /*return*/];
        });
    }); });
    it("Orders model should have a show method", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(orderModel.show).toBeDefined();
            return [2 /*return*/];
        });
    }); });
    it("Orders model should have a index method", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(orderModel.index).toBeDefined();
            return [2 /*return*/];
        });
    }); });
    it("Index method should return all orders", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orderModel.index()];
                case 1:
                    result = _a.sent();
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("show method should return specific order by id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orderModel.show("1")];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({
                        id: 1,
                        users_id: "1",
                        status: "active",
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("create method should create new order", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orderModel.create({
                        users_id: "3",
                        status: "active",
                    })];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({
                        id: 3,
                        users_id: "3",
                        status: "active",
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
