export default function translater(_char) {

    // Translate id/url - gender  - height - mass - color eyes


    let id = parseInt(_char.url.slice(28, -1))

    // 35 <> 47 <> 74 // 47  // 75 <> 35

    switch (true) {
        case (id == 35):
            id = 88
            _char.id = id
            break;
        case (id == 47):
            id = 73
            _char.id = id
            break;
        case (id >= 75):
            id -= 1
            _char.id = id
            break;
        case (id >= 48):
            id -= 2
            _char.id = id
            break;
        case (id >= 35):
            id -= 1
            _char.id = id
            break;
        default:
            _char.id = id
            break;
    }

    // if (id >= 75) {
    //     console.log(`restare 1 ${id}`)
    //     id -= 1
    //     _char.id = id
    //     console.log(`reste 1 ${id}`)
    // }
    // else if (id >= 48) {
    //     console.log(`restare 1 ${id}`)
    //     id -= 2
    //     _char.id = id
    //     console.log(`reste 1 ${id}`)
    // }
    // else if (id >= 35) {
    //     console.log(`restare 1 ${id}`)
    //     id -= 1
    //     _char.id = id
    //     console.log(`reste 1 ${id}`)
    // }
    // else {
    //     _char.id = id
    // }

    switch (_char.gender) {
        case 'male':
            _char.gender = 'Hombre'
            break;
        case 'female':
            _char.gender = 'Mujer'
            break;
        default:
            _char.gender = 'Sin género'
            break;
    }

    switch (_char.height) {
        case 'unknown':
            _char.height = 'Desconocido'
            break;

        default:
            _char.height = `${_char.height} cm`
            break;
    }

    switch (_char.mass) {
        case 'unknown':
            _char.mass = 'Desconocido'
            break;

        default:
            _char.mass = `${_char.mass} Kg.`
            break;
    }

    switch (_char.eye_color) {
        case 'blue':
            _char.eye_color = 'Azul'
            break;
        case 'yellow':
            _char.eye_color = 'Amarillo'
            break;
        case 'red':
            _char.eye_color = 'Rojo'
            break;
        case 'brown':
            _char.eye_color = 'Marrón'
            break;
        case 'blue-gray':
            _char.eye_color = 'Azul-grisacéo'
            break;
        case 'black':
            _char.eye_color = 'Negro'
            break;
        case 'orange':
            _char.eye_color = 'Naranja'
            break;
        case 'hazel':
            _char.eye_color = 'Marrón avellana'
            break;
        case 'pink':
            _char.eye_color = 'Rosa'
            break;
        case 'red, blue':
            _char.eye_color = 'Rojo azulado'
            break;
        case 'gold':
            _char.eye_color = 'Dorado'
            break;
        case 'green, yellow':
            _char.eye_color = 'Verde amarillento'
            break;
        case 'white':
            _char.eye_color = 'Blanco'
            break;
        case 'dark':
            _char.eye_color = 'Negro oscuro'
            break;
        default:
            _char.eye_color = 'Desconocido'
            break;
    }
}