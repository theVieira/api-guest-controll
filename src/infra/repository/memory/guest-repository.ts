import { Guest } from "../../../entities/guest/guest";
import { GuestGateway } from "../../../entities/guest/guest-gateway";

export class GuestRepository implements GuestGateway {
  memory: Array<Guest>;

  constructor() {
    this.memory = [];
  }

  async save(name: string): Promise<Guest> {
    const aGuest = new Guest(name);
    await this.memory.push(aGuest);
    return aGuest;
  }

  async list(): Promise<Guest[]> {
    return this.memory;
  }

  async confirm_presence(id: string): Promise<boolean> {
    const guest = await this.memory.findIndex((g) => g.id === id);

    const verify = this.memory[guest].confirm_presence();
    if (verify == true) {
      this.memory[guest].confirm = true;
      return verify;
    }

    return verify;
  }
}
