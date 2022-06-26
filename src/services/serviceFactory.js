import basketballService from "./basketball/basketball.service";

const services = { basketballService };

export const servicesFactory = {
  createService(serviceType) {
    const service = services[serviceType];
    return new service();
  },
  serviceType: {
    enums: {
      services: Object.freeze({
        basketballService: "basketballService"
      }),
    },
  },
};
