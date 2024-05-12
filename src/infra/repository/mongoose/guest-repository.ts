import { Guest } from "../../../entities/guest/guest";
import { GuestGateway } from "../../../entities/guest/guest-gateway";
import { GuestModel } from "./guest-model";

export class GuestRepository implements GuestGateway {
  async save(name: string): Promise<Guest> {
    const aGuest = new Guest(name);

    const data = await GuestModel.create({
      id: aGuest.id,
      name: aGuest.name,
      confirm: aGuest.confirm,
    });

    return data;
  }

  async confirm_presence(id: string): Promise<boolean> {
    await GuestModel.findByIdAndUpdate(id, {
      confirm: true,
    });

    return true;
  }

  async list(): Promise<Guest[]> {
    const data = await GuestModel.find();
    return data;
  }
}
