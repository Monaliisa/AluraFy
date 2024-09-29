export const addNewArtist = (name, image) => {
    const url = "http://localhost:3000/artista";

    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify({
            "nome": {name},
            "imagem": {image}
        }),
    });
}
