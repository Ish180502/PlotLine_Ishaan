import axios from 'axios';
// import { CART_EMPTY, EMPTY_CART_ITEM, EMPTY_CART_SUCCESS } from '../Constants/cartConstants';
import {
    INITIATE_TRANSACTION_FAIL,
    INITIATE_TRANSACTION_REQUEST,
    INITIATE_TRANSACTION_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_HISTORY_FAIL,
    ORDER_HISTORY_REQUEST,
    ORDER_HISTORY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
} from '../Constants/orderConstants';
import { emptyCart } from './cartActions';

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        const { data } = await axios.post('https://swift-serve-bt21.onrender.com/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
        dispatch(emptyCart())
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};



export const getOrderDetails = (orderId) => async (dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await axios.get(`https://swift-serve-bt21.onrender.com/api/orders/${orderId}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
    }
};


export const fetchOrderHistory = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_HISTORY_REQUEST });
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        const { data } = await axios.get('https://swift-serve-bt21.onrender.com/api/orders/user/history', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: ORDER_HISTORY_SUCCESS, payload: data });
        dispatch(emptyCart())
    } catch (error) {
        dispatch({
            type: ORDER_HISTORY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const initiateTransaction = (orderId) => async (dispatch, getState) => {
    dispatch({ type: INITIATE_TRANSACTION_REQUEST, payload: orderId });
    const {
        userSignin: { userInfo },
    } = getState();
    console.log(userInfo.token)
    try {
        const { data } = await axios.post(`https://swift-serve-bt21.onrender.com/api/orders/initiateTransaction/${orderId}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: INITIATE_TRANSACTION_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: INITIATE_TRANSACTION_FAIL, payload: message });
    }
};

export const payOrder = (order, paymentResult) => async (
    dispatch,
    getState
) => {
    dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = axios.put(`https://swift-serve-bt21.onrender.com/api/orders/${order._id}/paymentStatus`, paymentResult, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_PAY_FAIL, payload: message });
    }
}
