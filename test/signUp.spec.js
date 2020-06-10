import "../mock/mock.js";

import { models } from "../src/model/index.model.js";
describe("signUpEmailPassword", () => {
  it("Debería poder registrarse con el email: hi@hola.com y password: misil123", () =>
    models.signUpModel
      .signUpEmailPassword("hi@hola.com", "misil123")
      .then((obj) => {
        expect(obj.email).toBe("hi@hola.com");
      }));
});
