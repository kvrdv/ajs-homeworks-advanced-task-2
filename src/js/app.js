export default function showSpells(character) {
  const spells = [];
  const { name, type, health, level, attack, defence, ...rest } = character;

  for (let i = 0; i < rest.special.length; i += 1) {
    const restCopy = Object.assign({ description: 'Описание недоступно' }, rest.special[i]);
    spells.push(restCopy)
  }

  return spells;
}
