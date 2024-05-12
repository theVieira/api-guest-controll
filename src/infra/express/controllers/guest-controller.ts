import { Request, Response } from "express";
import { CreateGuestUseCase } from "../../../usecases/guest/create/create-usecase";
import { GuestRepository } from "../../repository/mongoose/guest-repository";
import { ListGuestUseCase } from "../../../usecases/guest/list/list-usecase";
import { ConfirmPresenceUseCase } from "../../../usecases/guest/confirm-presence/confirm-presence-usecase";

export class GuestController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    const guest_repository = new GuestRepository();
    const create_guest_usecase = new CreateGuestUseCase(guest_repository);

    try {
      const guest = await create_guest_usecase.execute(name);
      return res.status(201).json(guest);
    } catch (error) {
      if (error instanceof Error)
        return res.status(401).json({ message: error.message });
    }
  }

  async list(_: Request, res: Response) {
    const guest_repository = new GuestRepository();
    const list_guests_repository = new ListGuestUseCase(guest_repository);

    try {
      const guests = await list_guests_repository.execute();
      return res.status(200).json(guests);
    } catch (error) {
      if (error instanceof Error)
        return res.status(501).json({ message: error.message });
    }
  }

  async confirm(req: Request, res: Response) {
    const { id } = req.body;

    const guest_repository = new GuestRepository();
    const confirm_presence_usecase = new ConfirmPresenceUseCase(
      guest_repository
    );

    try {
      const confirm = await confirm_presence_usecase.execute(id);
      return res.status(200).json(confirm);
    } catch (error) {
      if (error instanceof Error)
        return res.status(401).json({ message: error.message });
    }
  }
}
