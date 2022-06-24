
import { eventHub } from '../../eventhub';
import axios from "axios";

export default class Http {
  constructor(status) {
    this.config = status.config;
    this.instance = axios.create({
      baseURL: status.baseURL ? status.baseURL : process.env.VUE_APP_API_URL,
      responseType: status.responseType,
      headers: status.reqHeader
    });

    return this.init()
  }
  emitLoader(config, eventName) {
    if (config) {
      if (config.loader && config.loader.show) {
        let eventHubName = config.loader.id ? eventName + config.loader.id : eventName + 'global';
        let message = config.loader.message ? config.loader.message : '';
        eventHub.$emit(eventHubName, { message: message, showOverlay: config.loader.showOverlay });
      }
    }
  }
  init() {
    this.instance.interceptors.request.use((request) => {

      this.emitLoader(this.config, 'before-request-');

      return request;
    }, error => {
      this.emitLoader(this.config, 'request-error-');

      return Promise.reject(error);
    })

    this.instance.interceptors.response.use(
      response => {
        this.emitLoader(this.config, 'after-response-');
        return response;
      },
      error => {
        this.emitLoader(this.config, 'response-error-');
        return Promise.reject(error);
      }
    );


    return this.instance;
  }
}
