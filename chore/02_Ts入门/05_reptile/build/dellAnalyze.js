"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var cheerio = require("cheerio");
var Analyze = /** @class */ (function () {
    function Analyze() {
    }
    Analyze.prototype.analyzeProcess = function (filepath, url, html) {
        var result = this.getInfo(html, url);
        var content = this.generateJsonContent(result, filepath);
        return JSON.stringify(content);
    };
    Analyze.prototype.getInfo = function (html, url) {
        var $ = cheerio.load(html);
        var courseItem = $(".course-item");
        var info = [];
        courseItem.map(function (index, element) {
            var img = $(element).find(".course-img").attr("src");
            var title = $(element).find(".course-desc").text();
            info.push({
                img: url + img,
                title: title,
            });
        });
        var result = {
            time: new Date().getTime(),
            data: info,
        };
        return result;
    };
    Analyze.prototype.generateJsonContent = function (result, path) {
        var content = {};
        if (fs_1.default.existsSync(path)) {
            content = JSON.parse(fs_1.default.readFileSync(path, { encoding: "utf-8" }));
        }
        content[result.time] = result.data;
        return content;
    };
    return Analyze;
}());
exports.default = Analyze;
