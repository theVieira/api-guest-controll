import { Guest } from "./guest";

export interface GuestGateway {
  save(name: string): Promise<Guest>;
  confirm_presence(id: string): Promise<boolean>;
  list(): Promise<Guest[]>;
}
