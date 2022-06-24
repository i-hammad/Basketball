import BaseService from "../base/base.service";
export default class LmsBaseService extends BaseService {
  constructor() {
    super({
      reqHeader: {
        "X-RapidAPI-Key": "0f43f07968msh723b3d61273c364p1e6bcdjsncca12f7e02b9",
        "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      },
      baseURL: 'https://api-basketball.p.rapidapi.com',
      // baseURL: process.env.VUE_APP_API_URL,
    });
  }
}
