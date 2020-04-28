const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    try {
        let ciudad = await lugar.getLugarLatLung(direccion);
        let temperatura = await clima.getClima(ciudad.lat, ciudad.lng);
        return `La ciudad de  ${direccion} ,  Tiene una Temperatura de  : $ ${temperatura} `;
    } catch (error) {
        return `No se pudo determinar el clima de esta Ciudad ${direccion} `;
    }
}

getInfo(argv.direccion)
    .then(respuesta => console.log(respuesta))
    .catch(e => console.log('Error ASYNC', e));