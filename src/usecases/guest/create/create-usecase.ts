import { Guest } from "../../../entities/guest/guest";
import { GuestGateway } from "../../../entities/guest/guest-gateway";

export class CreateGuestUseCase {
  guest_repository: GuestGateway;

  constructor(guest_repository: GuestGateway) {
    this.guest_repository = guest_repository;
  }

  async execute(name: string): Promise<Guest> {
    const aGuest = new Guest(name);
    await this.guest_repository.save(aGuest.name);
    return aGuest;
  }
}
