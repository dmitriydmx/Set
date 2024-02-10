
const assert = require('assert');
const Team = require('../team'); 
const Character = require('../character'); 

describe('Team', () => {
  describe('#add()', () => {
    it('should add a character to the team', () => {
      const team = new Team();
      const character = new Character('Character 1');

      team.add(character);
      const result = team.toArray();

      assert.deepStrictEqual(result, [character]);
    });

    it('should throw an error if the character already exists in the team', () => {
      const team = new Team();
      const character = new Character('Character 1');

      team.add(character);

      assert.throws(() => {
        team.add(character);
      }, Error);
    });
  });

  describe('#addAll()', () => {
    it('should add multiple characters to the team', () => {
      const team = new Team();
      const character1 = new Character('Character 1');
      const character2 = new Character('Character 2');

      team.addAll(character1, character2);
      const result = team.toArray();

      assert.deepStrictEqual(result, [character1, character2]);
    });   
  });

  describe('#toArray()', () => {
    it('should convert the team to an array', () => {
      const team = new Team();
      const character1 = new Character('Character 1');
      const character2 = new Character('Character 2');

      team.addAll(character1, character2);
      const result = team.toArray();

      assert.deepStrictEqual(result, [character1, character2]);
    });
  });
});



