import "../mock/mock.js";
import { models } from "../src/model/index.model.js";

describe("createNewPublication", () => {
    it("Deberia guardar la creacion de una nueva publicacion", () => 
        models.publicationsModel.createNewPublication({
            'userId': 'J0jQyTMuutQnP08w3qe2wZVkmox1',
            'userName': 'Alin',
            'userPhoto': 'http://test.com/image.jpg',
            'content': 'Invitacion a un evento',
            'image': 'http://test.com/imageEvento.jpg',
            'privacyAction': 'publico',
            'punctuation': 0,
        }).then((obj) => {
            expect(obj.id).toBeDefined()
        })
    );
})

describe("Obtiene datos agregados", () => {
    it("Deberia obtener una referencia a la coleccion de publicaciones", () =>
        expect(models.publicationsModel.getPublications()).toBeDefined()
    );
})

describe("Obtiene los datos de referencia al almacenamiento ", () => {
    it("Deberia obtener la referencia de almacenamiento", () => 
        expect(models.publicationsModel.getStorageRef()).toBeDefined()
    );
})

