/* @jest-environment jsdom */
import itemsCounter from '../src/modules/itemsCounter.js';

describe('counter', () => {
  test('Series Counter equals 2', () => {
    document.body.innerHTML = `
    <div class="card-container">
      <div class="card">
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="Sample photo" class="card-image">
            <div class="series-title">Under the Dome</div>
            <div class="heart" id="like-1">♥</div>
            <div class="likes" id="1">6 likes</div>
            <div class="button-container">
                <button type="button" name="1" class="btn btn-secondary btnComment" data-bs-toggle="modal" data-bs-target="#exampleModal1">Comments</button>
            </div>
      </div>
      <div class="card">
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="Sample photo" class="card-image">
            <div class="series-title">Under the Dome</div>
            <div class="heart" id="like-1">♥</div>
            <div class="likes" id="1">6 likes</div>
            <div class="button-container">
                <button type="button" name="1" class="btn btn-secondary btnComment" data-bs-toggle="modal" data-bs-target="#exampleModal1">Comments</button>
            </div>
      </div>
      <div class="series-menu">
      <div>
    </div>
    `;
    const cards = document.querySelectorAll('.card');
    const count = itemsCounter(cards);
    expect(count).toBe(2);
  });
});

describe('counter', () => {
  test('counter1', () => {
    document.body.innerHTML = `
    <div class="card-container">
      <div class="series-menu">
      <div>
    </div>
    `;
    const cards = document.querySelectorAll('.card');
    const count = itemsCounter(cards);
    expect(count).toBe(0);
  });
});

describe('Series Counter equals 0', () => {
  beforeAll(() => {
    document.body.innerHTML = `
    <div class="card-container">
      <div class="card">
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="Sample photo" class="card-image">
            <div class="series-title">Under the Dome</div>
            <div class="heart" id="like-1">♥</div>
            <div class="likes" id="1">6 likes</div>
            <div class="button-container">
                <button type="button" name="1" class="btn btn-secondary btnComment" data-bs-toggle="modal" data-bs-target="#exampleModal1">Comments</button>
            </div>
      </div>
      <div class="card">
            <img src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="Sample photo" class="card-image">
            <div class="series-title">Under the Dome</div>
            <div class="heart" id="like-1">♥</div>
            <div class="likes" id="1">6 likes</div>
            <div class="button-container">
                <button type="button" name="1" class="btn btn-secondary btnComment" data-bs-toggle="modal" data-bs-target="#exampleModal1">Comments</button>
            </div>
      </div>
      <div class="series-menu">
      </div>
    </div>
    `;
    const cards = document.querySelectorAll('.card');
    itemsCounter(cards);
  });
  test('Menu Count Updates Correctly', () => {
    const seriesMenu = document.querySelector('.series-menu');
    expect(seriesMenu.innerHTML).toMatch('Series (2)');
  });
});