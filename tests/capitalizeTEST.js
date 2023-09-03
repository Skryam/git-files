import capitalize from '../src/capitalizeForTest.js';
import { strict as assert } from 'node:assert';

assert.deepEqual(capitalize('hello'), 'Hello', ['Функция работает неверно!'])

assert.deepEqual(capitalize(''), '', ['Функция работает неверно!'])

console.log('Все тесты пройдены!');