import { getLocalList } from "./localStorage"


let contador = 0

export default function searchCharacter(_characterToSearch) {

    let savedChars = getLocalList('chars')

    for (const element of savedChars) {
        console.log(`entro ${contador} a buscar ${_characterToSearch} en ${element.charId}`)
        contador++
        if (element.charId == _characterToSearch) {
            return true
        }
    }
}

