export class UserApp {
  private _name: string;
  private _photoUrl: String;

  constructor(name: string, photoUrl: String) {
    this._name = name;
    this._photoUrl = photoUrl;
  }

  get name(): string {
    return this._name;
  }

  get photoUrl(): String {
    return this._photoUrl;
  }
}
