"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = require("express");
var dellAnalyze_1 = __importDefault(require("./dellAnalyze"));
var crowller_1 = require("./crowller");
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    res.send('Dicaprio');
});
router.get('/getDataJSON', function (req, res) {
    var url = "http://www.dell-lee.com";
    var filepath = path_1.default.resolve(__dirname, "../json/data.json");
    var analyze = new dellAnalyze_1.default();
    new crowller_1.Crowller(filepath, url, analyze);
    res.send('getDataJSON');
});
exports.default = router;
