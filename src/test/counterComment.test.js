/* @jest-environment jsdom */
import counterComment from '../modules/comments/counterComment.js';

// counter commets test
describe('counter comment', () => {
  test('some comments', () => {
    const id = 20;
    document.body.innerHTML = `
    <div id="comment${id}">
      <p>2022-11-23 zeus: great movie</p>
      <p>2022-11-23 zeus: great movie</p>
    </div>
    `;

    expect(counterComment(id)).toBe(2);
  });

  test('zero comments', () => {
    const id = 21;
    document.body.innerHTML = `
    <div id="comment${id}">
    </div>
    `;

    expect(counterComment(id)).toBe(0);
  });
});