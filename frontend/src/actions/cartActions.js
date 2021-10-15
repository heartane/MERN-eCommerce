import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

// 액션의 역할: 필요한 데이터를 db에 요청하여 받은 후 액션
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  // how to save in localStorage -> use localStorage API .setItem()
  // getState().cart.cartItems -> 전체 상태에서 원하는 상태값으로 타고타고 들어간다!
  // can save only string in localStorage -> JSON.stringify()
};
