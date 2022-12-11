const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada restoran', '.restaurant-not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran', '.restaurant-not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran', '.restaurant-not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name a');
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.seeElement('#likeButton');
  const btnLabel = await I.grabAttributeFrom('#likeButton', 'aria-label');
  assert.strictEqual(btnLabel, 'unlike this restaurant');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran', '.restaurant-not__found');
});
