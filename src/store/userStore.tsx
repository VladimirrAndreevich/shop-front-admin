import { action, makeObservable, observable } from "mobx";

class UserStore {
  isLogged = false;
  isTryingLogin = true;
  token = "";

  constructor() {
    makeObservable(this, {
      isLogged: observable,
      isTryingLogin: observable,
      token: observable,
      login: action,
      initToken: action,
    });
  }

  initToken = async (_token: string | null) => {
    if (_token !== null) {
      this.token = _token;
      await this.checkAuth();
    } else {
      console.warn("No token provided");
    }
    this.isTryingLogin = false;
  };

  async checkAuth() {
    const response = await fetch(
      `${process.env.API_URL_BACKEND}/admins/check-auth`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${this.token}` },
      }
    );

    if (response.ok) {
      this.isLogged = true;
    }

    const formattedResponse = await response.json();
    console.warn(formattedResponse);
  }

  login(_token: string | null) {
    if (_token === null) {
      return;
    }
    this.isTryingLogin = true;
    this.token = _token;
    this.checkAuth();
  }

  logout() {
    localStorage.removeItem("token");
    this.isLogged = false;
    this.token = "";
  }
}

let userStore: UserStore;

export const getStoreInstance = (): UserStore => {
  if (!userStore) {
    userStore = new UserStore();
  }
  return userStore;
};
