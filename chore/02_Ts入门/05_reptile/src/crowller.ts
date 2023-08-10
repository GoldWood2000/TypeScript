import fs from "fs";
// import path from "path";
const axios = require("axios");
// import Analyze from "./dellAnalyze";

export interface analyze {
  analyzeProcess: (filepath: string, url: string, html: string) => string;
}

export class Crowller {
  constructor(private filepath: string, private url: string, analyze: analyze) {
    this.initCrowllerProcess(analyze);
  }

  async initCrowllerProcess(analyze: analyze) {
    const html = await this.getRawHtml();
    this.writeJson(analyze.analyzeProcess(this.filepath, this.url, html));
  }

  async getRawHtml() {
    const result = await axios.get(this.url);
    return result.data;
  }

  writeJson(content: string) {
    fs.writeFileSync(this.filepath, content);
  }
}
// const url: string = "http://www.dell-lee.com";
// const filepath: string = path.resolve(__dirname, "../json/data.json");
// const analyze = new Analyze();
// new Crowller(filepath, url, analyze);
