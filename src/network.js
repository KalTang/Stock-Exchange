import axios from 'axios';
import { firebase } from '../firebase/config';

//Gets user ID from Firebase
export const getUserId = () => {
    try {
        const userInfo = firebase.auth().currentUser;
        return userInfo.uid;
    } catch (e) {
        console.log(e);
    }
};

//gets a users portfolio
export const getPortfolio = async () => {
    try {
        //calls the firebase userID to be used in database end point
        const uid = getUserId();

        const res = await axios({
            method: 'get',
            url: `https://mobileprojectapi20210329154219.azurewebsites.net/portfolio/${uid}`,
        });
        // console.log(res.data);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
// Register a new user
export async function registerUser({ userId }) {
    try {
        const response = await axios.post(
            'https://mobileprojectapi20210329154219.azurewebsites.net/register',
            {
                userId,
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}

//Buy a stock
export async function executeBuy({ symbol, qty, price, createdOn }) {
    try {
        const uid = getUserId();

        const response = await axios.post(
            'https://mobileprojectapi20210329154219.azurewebsites.net/transaction',
            {
                userId: uid,
                symbol,
                qty,
                price,
                createdOn,
            }
        );

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

//Sell a stock
export async function executeSell({ symbol, qty, price, createdOn }) {
    try {
        const uid = getUserId();

        const response = await axios.post(
            'https://mobileprojectapi20210329154219.azurewebsites.net/transaction',
            {
                userId: uid,
                symbol,
                qty,
                price,
                createdOn,
            }
        );

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
