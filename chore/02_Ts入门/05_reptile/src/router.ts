import path from "path";
import { Router, Request, Response } from 'express';
import Analyze from "./dellAnalyze";
import { Crowller } from './crowller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Dicaprio');
})

router.get('/getDataJSON', (req: Request, res: Response) => {
  const url: string = "http://www.dell-lee.com";
  const filepath: string = path.resolve(__dirname, "../json/data.json");
  const analyze = new Analyze();
  new Crowller(filepath, url, analyze);
  res.send('getDataJSON');
})

export default router;