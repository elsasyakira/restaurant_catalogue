import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img loading="lazy" class="restaurant__pict" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__detail">
  <h3>Detail</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address} , Kota ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Makanan</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Minuman</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="restaurant__desc">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="restaurant__desc">
  <h3>Customer Reviews</h3>
  <div class="restaurant__reviews">
  ${restaurant.customerReviews.map((review) => `
        <div class="review-member">
          <h4 class="text-title">${review.name}</h4>
          <div class="review-date">${review.date}</div>
          <div>${review.review}</div>
        </div>`).join('')}
  </div>

  <div class="restaurant__desc">
  <h3>Leave Reviews</h3>
  
  <form target="dummyframe" action="${CONFIG.BASE_URL}review" method="post" id="myForm">
    <input type="hidden" id="id" name="id" value="${restaurant.id}">
    <label>
      Name: 
      <input type="text" class="form-element" name="name">
    </label>
    <label>
      Review:
      <textarea type="text" class="form-element" name="review"></textarea>
    </label>
    <input type="submit" onclick='window.location.reload();' value="Submit Review" class="btn-form">
  </form>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img loading="lazy" class="restaurant-item__header__pict lazyload" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating} | ${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__name" id="restaurant-name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
