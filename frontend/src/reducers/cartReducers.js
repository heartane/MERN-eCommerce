import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

// 리듀서의 역할: 초기 상태와 액션 타입에 따라 변경될 상태를 정의
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      // 이미 장바구니에 있는 아이템 선별

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }; // 없다면 이미 있는 장바구니 목록에 추가하기
      }
    case CART_REMOVE_ITEM:
      return {};
    default:
      return state;
  }
};
