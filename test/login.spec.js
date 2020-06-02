import { models } from "../src/model/index.model.js";

describe("authEmailPassword", () => {
  it("Deberia poder ingresar con el email: hola@hola.es y el user: anonymous", () =>
    models.logInModel
      .authEmailPassword("hola@hola.es", "anonymous")
      .then((obj) => {
        expect(obj.email).toBe("hola@hola.es");
      }));
});

describe("authGmail", () => {
  it("Deberia poder ingresar a mi cuenta con google", () => {
    models.logInModel.authGmail().then((obj) => {
      expect(obj._result.providerData[0].providerId).toBe(google.com);
    });
  });
});

describe("authFacebook", () => {
  it("Deberia poder ingresar a mi cuenta con google", () => {
    models.logInModel.authFacebook().then((obj) => {
      expect(obj._result.providerData[0].providerId).toBe(facebook.com);
    });
  });
});
