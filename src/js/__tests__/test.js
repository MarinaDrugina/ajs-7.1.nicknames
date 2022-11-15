import Validator from '../app.js';

test('correct username', () => {
  const result = new Validator().validateUsername('neoG-15_gn');
  expect(result).toBe(true);
});

test('not correct username', () => {
  expect(() => {
    const result = new Validator();
    return result.validateUsername('ёd0_nEo-!132_gn');
  }).toThrow(new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)'));
});

test('not correct number of digits in username', () => {
  expect(() => {
    const result = new Validator();
    return result.validateUsername('neo-15987_gn');
  }).toThrow(new Error('Имя не должно содержать подряд более трёх цифр'));
});

test('not correct beginning of username', () => {
  expect(() => {
    const result = new Validator();
    return result.validateUsername('_neo-15a');
  }).toThrow(new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире'));
});

test('not correct end of username', () => {
  expect(() => {
    const result = new Validator();
    return result.validateUsername('neo-15');
  }).toThrow(new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире'));
});
