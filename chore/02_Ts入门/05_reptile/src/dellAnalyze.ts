import fs from "fs";
const cheerio = require("cheerio");
import { analyze } from "./crowller";

interface IInfo {
  img: string;
  title: string;
}

interface IResultInfo {
  time: number;
  data: IInfo[];
}

interface IJsonContent {
  [proptime: number]: IInfo[];
}

export default class Analyze implements analyze {
  analyzeProcess(filepath: string, url: string, html: string) {
    const result = this.getInfo(html, url);
    const content = this.generateJsonContent(result, filepath);
    return JSON.stringify(content);
  }

  private getInfo(html: string, url: string) {
    const $ = cheerio.load(html);
    const courseItem = $(".course-item");
    const info: IInfo[] = [];
    courseItem.map((index: number, element: string) => {
      const img = $(element).find(".course-img").attr("src");
      const title = $(element).find(".course-desc").text();
      info.push({
        img: url + img,
        title,
      });
    });

    const result: IResultInfo = {
      time: new Date().getTime(),
      data: info,
    };

    return result;
  }

  private generateJsonContent(result: IResultInfo, path: string) {
    let content: IJsonContent = {};
    if (fs.existsSync(path)) {
      content = JSON.parse(fs.readFileSync(path, { encoding: "utf-8" }));
    }
    content[result.time] = result.data;
    return content;
  }
}
