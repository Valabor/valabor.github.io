export default class User {
  static instance: User;
  constructor() {
    if (!User.instance) {
      User.instance = this;
    } else {
      return  User.instance;
    }
  }
  public userName: string = 'Mark';
  public setUserName(name: string) {
    this.userName = name;
  }
}