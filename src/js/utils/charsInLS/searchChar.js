import { getLocalList } from "../localStorage/localStorage"


let contador = 0

export default function searchCharacter(_characterToSearch) {

    let savedChars = getLocalList('chars')

    for (const element of savedChars) {
        contador++
        if (element.charId == _characterToSearch) {
            return true
        }
    }
}

