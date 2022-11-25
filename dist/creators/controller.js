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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositry_1 = __importDefault(require("./repositry"));
const validations_1 = __importDefault(require("./validations"));
const list = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield repositry_1.default.list(query);
    const data = {
        data: list,
        metadata: {
            nextPage: 2,
            currentPage: 1,
            perPage: 20
        }
    };
    return data;
});
const store = (data) => __awaiter(void 0, void 0, void 0, function* () {
    validations_1.default.validateCreatorInput(data);
    const model = yield repositry_1.default.store(data);
    return model;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const model = yield repositry_1.default.getOne(id);
    if (!model)
        throw new Error("Product not found");
    return model;
});
exports.default = {
    list,
    store,
    getOne,
};
