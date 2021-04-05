import axios from 'axios';
import { firebase } from '../firebase/config';
export const getUserId = () => {
    try {
        const userInfo = firebase.auth().currentUser;
        return userInfo.uid;
    } catch (e) {
        console.log(e);
    }
};
export const getPortfolio = async () => {
    try {
        const uid = getUserId();
        // console.log(uid);
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
