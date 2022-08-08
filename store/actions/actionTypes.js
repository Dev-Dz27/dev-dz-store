// Define action types for storing static data products and categories
export const STORE_CATEGORIES = 'STORE_CATEGORIES';
export const STORE_PRODUCTS = 'STORE_PRODUCTS';

// Define cart action types
export const RETRIEVE_CART_SUCCESS = 'RETRIEVE_CART_SUCCESS';
export const RETRIEVE_CART_ERROR = 'RETRIEVE_CART_ERROR';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';
export const UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS';
export const UPDATE_CART_ITEM_ERROR = 'UPDATE_CART_ITEM_ERROR';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_ERROR = 'REMOVE_FROM_CART_ERROR';


// Define checkout action types
export const CAPTURE_ORDER_SUCCESS = 'CAPTURE_ORDER_SUCCESS';
export const GENERATE_CHECKOUT_TOKEN = 'GENERATE_CHECKOUT_TOKEN';
export const GET_SHIPPING_OPTIONS = 'GET_SHIPPING_OPTIONS';
export const REMOVE_SHIPPING_OPTIONS = 'REMOVE_SHIPPING_OPTIONS';
export const UPDATE_CHECKOUT_LIVE_OBJECT = 'UPDATE_CHECKOUT_LIVE_OBJECT';
export const ABORT_CHECKOUT = 'ABORT_CHECKOUT';


// Define customer/authentication action types
export const SET_CUSTOMER = 'SET_CUSTOMER';
export const CLEAR_CUSTOMER = 'CLEAR_CUSTOMER';
