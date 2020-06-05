import { models } from "../src/model/index.model.js";

describe("authEmailPassword", () => {
  it("Debería poder ingresar con el email: hola@hola.es y el user: anonymous", () =>
    models.logInModel
      .authEmailPassword("hola@hola.es", "anonymous")
      .then((obj) => expect(obj.email).toBe("hola@hola.es")));
});

describe("authGmail", () => {
  it("Debería poder ingresar a mi cuenta con google", () => {
    models.logInModel.authGmail().then((obj) => {
      expect(obj._result.providerData[0].providerId).toBe(google.com);
    });
  });
});

describe("authFacebook", () => {
  it("Debería poder ingresar a mi cuenta con google", () => {
    models.logInModel.authFacebook().then((obj) => {
      expect(obj._result.providerData[0].providerId).toBe(facebook.com);
    });
  });
});

describe("signUpEmailPassword", () => {
  it("Debería poder registrarse con el email: hi@hola.com y password: misil123", () =>
    models.signUpModel
      .signUpEmailPassword("hi@hola.com", "misil123")
      .then((obj) => expect(obj.email).toBe("hi@hola.com")));
});
