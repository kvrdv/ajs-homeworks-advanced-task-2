export default function showSpells(character) {
  const {
    name, type, health, level, attack, defence, ...rest
  } = character;

  const spells = rest.special;

  for (let i = 0; i < spells.length; i += 1) {
    if (spells[i].description === undefined) {
      spells[i].description = 'Не указан';
    }
  }

  return spells;
}
