import { GuestGateway } from "../../../entities/guest/guest-gateway";
import { Guest } from "../../../entities/guest/guest";

export class ListGuestUseCase {
  guest_repository: GuestGateway;

  constructor(guest_repository: GuestGateway) {
    this.guest_repository = guest_repository;
  }

  async execute(): Promise<Guest[]> {
    const data = await this.guest_repository.list();
    return data;
  }
}
