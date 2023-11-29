import Nerdmas from "../model/Nerdmas.js";
import { type NerdmasStructure, type NerdmasRepository } from "../types";

class NerdmasMongooseRepository implements NerdmasRepository {
  public async getNerdmas(): Promise<NerdmasStructure[]> {
    const nerdmas = await Nerdmas.find().limit(10);

    return nerdmas;
  }
}

export default NerdmasMongooseRepository;
