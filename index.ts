import express, { Express, Request, Response, NextFunction } from "express";
import { ulid } from "ulid";
import cors from 'cors';
import appRouter from './router'
import { connectDB } from './db';

import { Product } from './products/models';

connectDB();

const app: Express = express();

app.use(express.json());
app.use(cors());

appRouter(app);

app.listen(3000, () => console.log("app is running on http://localhost:3000"));