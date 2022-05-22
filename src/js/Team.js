export default class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...character) {
    character.forEach((elem) => this.members.add(elem));
  }

  [Symbol.iterator]() {
    const persons = Array.from(this.members);
    let current = 0;
    const last = persons.length;

    return {
      next() {
        if (current < last) {
          const person = persons[current];
          current += 1;
          return {
            done: false,
            value: person,
          };
        }

        return {
          done: true,
          value: undefined,
        };
      },
    };
  }
}
