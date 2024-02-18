function buildMakeCustomer(validator) {
  return async function makeCustomer(payload, up) {
    if (!up) {
      if (!validator.validatPhoneNumber(payload.phoneNumber)) {
        throw new Error("Invalid phone number");
      }

      if (await validator.checkDuplicatePhoneNumber(payload.phoneNumber)) {
        throw new Error("Duplicate Number");
      }
      if (await validator.checkDuplicateName(payload.userName)) {
        throw new Error("Duplicate userName");
      }

      if (payload.password && !validator.validatePassword(payload.password)) {
        throw new Error("Min length is 8");
      }
    } else {
      if (payload.phoneNumber) {
        console.log("sdklfj");
        if (!validator.validatPhoneNumber(payload.phoneNumber)) {
          throw new Error("Invalid phone number");
        }
        if (await validator.checkDuplicatePhoneNumber(payload.phoneNumber)) {
          throw new Error("Duplicate Number");
        }
      }
      if (payload.userName) {
        console.log("sdklfj");

        if (await validator.checkDuplicateName(payload.userName)) {
          throw new Error("Duplicate userName");
        }
      }
      if (payload.password) {
        if (payload.password && !validator.validatePassword(payload.password)) {
          throw new Error("Min length is 8");
        }
      }
    }

    return Object.freeze(validator.normalizeInput(payload));
  };
}

module.exports = {
  buildMakeCustomer,
};
