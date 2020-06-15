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
        }));
})

