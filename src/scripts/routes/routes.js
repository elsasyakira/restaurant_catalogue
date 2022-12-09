import Restaurants from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurants, // default page
  '/restaurants': Restaurants,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/like': Like,
};

export default routes;
