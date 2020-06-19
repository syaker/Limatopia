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

describe("Actualiza el nombre en la publicacion", () => {
    it("Deberia acualizar el nuevo nombre del usuario en la coleccion de publicacion", () => 
        expect(models.publicationsModel.updateNamePublication('J0jQyTMuutQnP08w3qe2wZVkmox1', 'Gloria')).toBe(true)
    );
})

describe("Actualiza la foto en la publicacion", () => {
    it("Deberia actualizar la foto de perfil del usuario en la coleccion de publicacion", () => 
        expect(models.publicationsModel.updatePhotoPublication('J0jQyTMuutQnP08w3qe2wZVkmox1', 'http://test.com//newImg.jpg'))
        .toBe(true)
    );
})

describe("Elimina un post", () => {
    it("Deberia eliminar un post publicado", () => 
        expect(models.publicationsModel.deletePublication('J0jQyTMuutQnP08w3qe2wZVkmox1')).toBe(true)
    );
})

describe("Actualiza un post", () => {
    it("Deberia actualizar el contenido de una publicacion", () => 
        expect(models.publicationsModel.updatePublication('J0jQyTMuutQnP08w3qe2wZVkmox1', 'Estamos probando la actualizacion del test'))
        .toBe(true)
    );
})

describe("Creacion de un nuevo cmentario", () => {
    it("Deberia crear una nueva publicacion", () => 
        models.publicationsModel.addComment('EStamos probando los comentarios de los test')
        .then((obj) => {
            expect(obj.id).toBeDefined();
        })
    );
})

describe("Obtiene los comentarios de un post", () => {
    it ("Deberia obtener una referencia a la coleccion de comentarios", () => 
       models.publicationsModel.getComments('6gxnEVZhVnE1897vH0i0')
       .then((obj) => {
           expect(obj).toBeDefined()
       })
    );
})

describe("Elimina un comentario de un post", () => {
    it("Deberia eliminar un comentario en un post", () => 
        models.publicationsModel.deleteComment('6gxnEVZhVnE1897vH0i0')
        .then((obj) => {
            expect(obj).toBe(null);
        })
    );
})

