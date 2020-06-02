//Configuracion de firebasemock
//Importando libreria que se usara para simular firebase
import firebasemock from "firebase-mock";
//Guardando en una constante el metodo que necesitamos, en este caso mockauth
// se pueden encontrar todos los SDK de firebase en la documentacion de la libreria
const mockauth = new firebasemock.MockAuthentication();
//Esto es necesario para refrescar (los datos me imagino)
mockauth.autoFlush();
//Aqui reemplazamos mediante el objeto global a todos los objetos firebase por el mock
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth
);
//Importando funcion de registro para testear
import { models } from "../src/model/logIn.model.js";

describe("authEmailPassword", () => {
  it("Deberia poder ingresar con el email: hola@hola.es y el user: anonymous", () =>
    authEmailPassword("hola@hola.es", "anonymous").then((obj) => {
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