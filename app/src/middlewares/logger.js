import { push } from 'connected-react-router';

export default (store) => (next) => (action) => {
  next(action);
  // if (store.getState().router.location.pathname === '/signpost' || '/signpost/individual') {
  //   next(push('/create/roklenfx'));
  // }
};
