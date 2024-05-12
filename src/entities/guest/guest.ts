import { randomUUID } from "crypto";

export class Guest {
  id: string;
  name: string;
  confirm: boolean;

  constructor(name: string) {
    this.id = randomUUID().toString();
    this.name = name;
    this.confirm = false;
  }

  confirm_presence() {
    if (this.confirm != false) {
      throw new Error("presence already confirmed");
    }

    return (this.confirm = true);
  }
}
