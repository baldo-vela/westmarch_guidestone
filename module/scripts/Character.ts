type Character = {
    data?: {

    }
}

type CharacterAbilityScores = {
    strength: number;
    strMod?: number;
    dexterity: number;
    dexMod?: number;
    constitution: number;
    conMod?: number;
    intelligence: number;
    intMod?: number;
    wisdom: number;
    wisMod?: number;
    charisma: number;
    chaMod?: number;
}

export { Character, CharacterAbilityScores };