export default class Validator {
  validateUsername(userName) {
    this.userName = userName;
    if (/[^\w-]/.test(userName) === true) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (/\d{4,}/.test(userName) === true) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }
    if (/^[\d-_]/.test(userName) === true) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    }
    if (/[\d-_]$/.test(userName) === true) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    }
    return true;
  }
}
