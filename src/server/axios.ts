import axios, { AxiosInstance } from "axios";
const baseURL = "http://14.225.192.54:8080/api/v1/";
type Controller = {
  account: undefined;
  login: undefined;
};

export class Axios<T> {
  instance: AxiosInstance;

  constructor(controller: keyof Controller, auth?: boolean, token?: string) {
    if (auth) {
      this.createAuth(controller, token || "");
    } else {
      this.create(controller);
    }
  }

  create(controller: keyof Controller) {
    this.instance = axios.create({ baseURL: baseURL + controller });
  }
  createAuth(controller: keyof Controller, token: string) {
    this.instance = axios.create({
      baseURL: baseURL + controller,
      headers: { Authorization: token },
    });
  }

  async get(prefix?: string) {
    const { data } = await this.instance.get(prefix || "");
    return data as unknown as T;
  }

  async post(item: T, prefix?: string) {
    const { data } = await this.instance.post(prefix || "", item);
    return data;
  }

  async getManyItem(prefix?: string) {
    const { data } = await this.instance.get(prefix || "");
    return data as unknown as T[];
  }

  async patch(item: Partial<T>, prefix?: string) {
    const { data } = await this.instance.patch(prefix || "", item);
    return data as unknown as T;
  }

  async delete(prefix: string) {
    const { data } = await this.instance.delete(prefix);
    return data as unknown as T;
  }
}
