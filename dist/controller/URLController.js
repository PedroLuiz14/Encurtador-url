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
exports.URLController = void 0;
const Constants_1 = require("../config/Constants");
const shortid_1 = __importDefault(require("shortid"));
class URLController {
    shorten(req, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { originURL } = req.body;
            const hash = shortid_1.default.generate();
            const shortURL = `${Constants_1.config.API_URL}/${hash}`;
            response.json({ originURL, hash, shortURL });
        });
    }
    redirect(req, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = req.params;
            const url = {
                originURL: '',
                hash: '',
                shortURL: '',
            };
            response.redirect(url.originURL);
        });
    }
}
exports.URLController = URLController;
//# sourceMappingURL=URLController.js.map