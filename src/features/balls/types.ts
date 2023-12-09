import type { Request } from "express";

export interface BallsStructure {
  _id: string;
  ballName: string;
  isAvailable: boolean;
  collection: string;
  shop: string;
  yearRelease: number;
  price: number;
  imageUrl: string;
  description: string;
  isTengui: boolean;
}

export type BallStructureWithoutId = Omit<BallsStructure, "_id">;

export type UpdateBallRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  { _id: string; isTengui: boolean }
>;

export type BallRequestWithoutId = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  BallStructureWithoutId
>;

export type BallRequestById = Request<{ ballId: string }>;
