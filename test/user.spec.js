import "../mock/mock.js";

import functionsUser from "../src/model/user.model.js";

const currentUser = {
	displayName: name,
}

describe("updateDisplayName", () => {
  it("Debe mostrar el nombre del usuario", () =>
    functionsUser.updateDisplayName("Paloma")
      .then((name) => expect({ displayName: name }).toBe("Paloma")));
});

describe("updatePhotoUser", () => {
  it("Debe actualizar la foto de perfil", () =>
    functionsUser.user
      .updatePhotoUser(
        "https://firebasestorage.googleapis.com/v0/b/social-network-lima-topia.appspot.com/o/1591458428103-portada.png?alt=media&token=4f26302e-22f8-4fe4-99e5-eb7853efbefb"
      )
      .then((file) => expect(file.name).toBe("photoUpload/" + file.name)));
});

describe("updatePhotoBg", () => {
  it("Debe actualizar la foto de background", () =>
    functionsUser.user
      .updatePhotoBg(
        "https://firebasestorage.googleapis.com/v0/b/social-network-lima-topia.appspot.com/o/1591458428103-portada.png?alt=media&token=4f26302e-22f8-4fe4-99e5-eb7853efbefb"
      )
      .then((file) => expect(file.name).toBe("bgUpload/" + newName)));
});
describe("saveBackgroundUser", () => {
  it("Debe actualizar la foto de perfil", () =>
    functionsUser.user
      .saveBackgroundUser(
        user.uid,
        "https://firebasestorage.googleapis.com/v0/b/social-network-lima-topia.appspot.com/o/1591458428103-portada.png?alt=media&token=4f26302e-22f8-4fe4-99e5-eb7853efbefb"
      )
      .then((file) => expect().toBe("photoUpload/" + file.name)));
});
describe("getBackgroundUser", () => {
  it("Debe mostrar el objeto del id de usuario pedido", () =>
    functionsUser.user
      .getBackgroundUser(
        "https://firebasestorage.googleapis.com/v0/b/social-network-lima-topia.appspot.com/o/1591458428103-portada.png?alt=media&token=4f26302e-22f8-4fe4-99e5-eb7853efbefb"
      )
      .then((userId) => expect(user.uid).toBe({})));
});
