import capitalize from '../src/capitalizeForTest.js'

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');