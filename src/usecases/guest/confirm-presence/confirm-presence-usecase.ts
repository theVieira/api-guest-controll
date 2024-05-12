import { Guest } from "../../../entities/guest/guest";
import { GuestGateway } from "../../../entities/guest/guest-gateway";

export class ConfirmPresenceUseCase {
  guest_repository: GuestGateway;

  constructor(guest_repository: GuestGateway) {
    this.guest_repository = guest_repository;
  }

  async execute(id: string): Promise<boolean> {
    await this.guest_repository.confirm_presence(id);
    return true;
  }
}
