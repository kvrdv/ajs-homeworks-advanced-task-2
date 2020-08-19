import showSpells from '../app';

test('Вывод способностей 1', () => {
  const received = showSpells({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  });
  const expected = [
    {
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...',
      id: 8,
      name: 'Двойной выстрел',
    },
    {
      description: 'Описание недоступно',
      icon: 'http://...',
      id: 9,
      name: 'Нокаутирующий удар',
    },
  ];
  expect(received).toEqual(expected);
});
