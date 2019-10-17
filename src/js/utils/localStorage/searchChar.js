import { getLocalList } from "./localStorage"



export default function searchCharacter(_characterToSearch) {

    let savedChars = getLocalList('chars')

    for (const element of savedChars) {
        if (element.charId == _characterToSearch) {
            return true
        } 
    }
}

