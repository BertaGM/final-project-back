export interface NerdmasData {
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

export interface NerdmasRepository {
  getNerdmas: () => Promise<NerdmasData[]>;
}
