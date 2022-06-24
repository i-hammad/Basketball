import lmsService from "./lms/lms.service";

const services = { lmsService };

export const servicesFactory = {
  createService(serviceType) {
    const service = services[serviceType];
    return new service();
  },
  serviceType: {
    enums: {
      services: Object.freeze({
        lmsService: "lmsService"
      }),
    },
  },
};
