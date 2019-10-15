export default function translater(char) {

    // Translate gender  - height - mass - color eyes

    switch (char.gender) {
        case 'male':
            char.gender = 'Hombre'
            break;
        case 'female':
            char.gender = 'Mujer'
            break;
        default:
            char.gender = 'Sin género'
            break;
    }

    switch (char.height) {
        case 'unknown':
            char.height = 'Desconocido'
            break;

        default:
            char.height = `${char.height} cm`
            break;
    }

    switch (char.mass) {
        case 'unknown':
            char.mass = 'Desconocido'
            break;

        default:
            char.mass = `${char.mass} Kg.`
            break;
    }

    switch (char.eye_color) {
        case 'blue':
            char.eye_color = 'Azul'
            break;
        case 'yellow':
            char.eye_color = 'Amarillo'
            break;
        case 'red':
            char.eye_color = 'Rojo'
            break;
        case 'brown':
            char.eye_color = 'Marrón'
            break;
        case 'blue-gray':
            char.eye_color = 'Azul-grisacéo'
            break;
        case 'black':
            char.eye_color = 'Negro'
            break;
        case 'orange':
            char.eye_color = 'Naranja'
            break;
        case 'hazel':
            char.eye_color = 'Marrón avellana'
            break;
        case 'pink':
            char.eye_color = 'Rosa'
            break;
        case 'red, blue':
            char.eye_color = 'Rojo azulado'
            break;
        case 'gold':
            char.eye_color = 'Dorado'
            break;
        case 'green, yellow':
            char.eye_color = 'Verde amarillento'
            break;
        case 'white':
            char.eye_color = 'Blanco'
            break;
        case 'dark':
            char.eye_color = 'Negro oscuro'
            break;
        default:
            char.eye_color = 'Desconocido'
            break;
    }
}