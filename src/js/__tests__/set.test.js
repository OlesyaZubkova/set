import Team from '../set';
import Bowerman from '../bowerman';
import Magician from '../magician';
import Undead from '../undead';

test('should add character', () => {
  const hero = new Bowerman('Bowerman');
  const team = new Team();
  team.add(hero);
  const expected = [
    {
      name: 'Bowerman',
      attack: 25,
      defence: 25,
    },
  ];

  expect(team.toArray()).toEqual(expected);
});

test('should not be re-added character', () => {
  const hero = new Bowerman('Bowerman');
  const team = new Team();
  team.add(hero);
  expect(() => team.add(hero)).toThrow(new Error('Персонаж существует!'));
});

test('should add characters', () => {
  const protagonist = new Magician('Magician');
  const antagonist = new Undead('Undead');
  const team = new Team();
  team.addAll(protagonist, antagonist);
  const expected = [
    {
      name: 'Magician',
      attack: 10,
      defence: 40,
    },

    {
      name: 'Undead',
      attack: 25,
      defence: 25,
    },
  ];

  expect(team.toArray()).toEqual(expected);
});
