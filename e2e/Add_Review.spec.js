Feature('Write Reviews');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Write one Reviews', async ({ I }) => {
  I.seeElement('.restaurant__name a');
  const firstRestaurant = locate('.restaurant__name a').first();

  I.click(firstRestaurant);

  I.fillField('name', 'Elsa Syakira');
  I.fillField('review', 'Makanan dan minuman direstoran ini harganya sangat terjangkau dan enak');

  I.click('Submit Review');
});
