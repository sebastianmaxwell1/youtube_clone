import axios from 'axios';
const KEY = 'AIzaSyAMxqgtFqi3otpMK3Q-_sq5eV5m1h79laA'; 
// mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})