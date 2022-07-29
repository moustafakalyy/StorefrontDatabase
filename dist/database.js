"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_DB_test = _a.POSTGRES_DB_test, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, ENV = _a.ENV;
var client;
if (ENV === "dev") {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    });
}
else if (ENV === "test") {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB_test,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    });
}
exports.default = client;
