import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { buildDataLoaders } from "src/utils/dataLoaders";
import { Connection } from "typeorm";
import { UserAuthPayload } from "./UserAuthPayload";
export interface Context {
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: number };
  };
  res: Response;
  user: UserAuthPayload;
  connection: Connection;
  dataLoaders: ReturnType<typeof buildDataLoaders>;
}
