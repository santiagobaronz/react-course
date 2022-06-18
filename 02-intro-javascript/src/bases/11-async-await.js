
// const getImagenPromesa = () => new Promise( resolve => resolve('Hola'))
// getImagenPromesa().then(console.log)

const getImagen = async() => {

    try {
        const API_KEY = 'JbvU4kSMqZmBfpkXIJBLvL9g4j4RZyL5';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
}

getImagen()
