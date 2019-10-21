export default function translater(_char) {

    // Translate id/url
    let charId = parseInt(_char.url.slice(28, -1))

    const setId = (_id) => {

        switch (true) {
            case (_id == 35):
                _id = 87
                return _char.id = _id

            case (_id == 47):
                _id = 72
                return _char.id = _id

            case (_id >= 75):
                _id -= 2
                return _char.id = _id

            case (_id >= 48):
                _id -= 3
                return _char.id = _id

            case (_id >= 35):
                _id -= 2
                return _char.id = _id

            case (_id >= 18):
                _id -= 1
                return _char.id = _id

            default:
                return _char.id = _id
        }
    }

    //  Translate gender  
    let charGender = _char.gender

    const setGender = (_charGender) => {

        switch (_charGender) {
            case 'male':
                return _char.gender = 'Hombre'

            case 'female':
                return _char.gender = 'Mujer'

            default:
                return _char.gender = 'Sin género'

        }
    }

    // Translate height
    let charHeight = _char.height

    const setHeight = (_charHeight) => {

        switch (_charHeight) {
            case 'unknown':
                return _char.height = 'Desconocido'


            default:
                return _char.height = `${_char.height} cm`

        }
    }

    // Translate mass
    let charMass = _char.mass

    const setMass = (_charMass) => {

        switch (_charMass) {
            case 'unknown':
                return _char.mass = 'Desconocido'


            default:
                return _char.mass = `${_char.mass} Kg`

        }
    }


    // Translate color eyes
    let charEyes = _char.eye_color

    const setEyes = (_charEyes) => {

        switch (_charEyes) {
            case 'blue':
                return _char.eye_color = 'Azul'
                
            case 'yellow':
                return _char.eye_color = 'Amarillo'
                
            case 'red':
                return _char.eye_color = 'Rojo'
                
            case 'brown':
                return _char.eye_color = 'Marrón'
                
            case 'blue-gray':
                return _char.eye_color = 'Azul-grisacéo'
                
            case 'black':
                return _char.eye_color = 'Negro'
                
            case 'orange':
                return _char.eye_color = 'Naranja'
                
            case 'hazel':
                return _char.eye_color = 'Marrón avellana'
                
            case 'pink':
                return _char.eye_color = 'Rosa'
                
            case 'red, blue':
                return _char.eye_color = 'Rojo azulado'
                
            case 'gold':
                return _char.eye_color = 'Dorado'
                
            case 'green, yellow':
                return _char.eye_color = 'Verde amarillento'
                
            case 'white':
                return _char.eye_color = 'Blanco'
                
            case 'dark':
                return _char.eye_color = 'Negro oscuro'
                
            default:
                return _char.eye_color = 'Desconocido'
                
        }
    }

    // Calls
    setId(charId)
    setGender(charGender)
    setHeight(charHeight)
    setMass(charMass)
    setEyes(charEyes)
}