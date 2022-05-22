import Team from './Team';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const magician = {
  name: 'Маг',
  type: 'Magician',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const team = new Team();
team.addAll(bowman, magician);

for (const item of team) {
  console.log(item);
}
