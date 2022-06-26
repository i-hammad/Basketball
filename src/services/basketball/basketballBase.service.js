import BaseService from "../base/base.service";
export default class BasketballBaseService extends BaseService {
  constructor() {
    super({
      reqHeader: {
        "X-RapidAPI-Key": process.env.VUE_APP_API_SECURITY_KEY,
        "X-RapidAPI-Host": process.env.VUE_APP_API_HOST,
      },
      baseURL: process.env.VUE_APP_API_URL,
      // baseURL: process.env.VUE_APP_API_URL,
    });
  }
}
