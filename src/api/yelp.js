import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer nC8Dii3v1zP2mZNcW8UKRnSP5MBhWFnQe5mwoH_9ZA8XjI4AvqzQEoLQAj48MDczmdh9Jykkca4c4LY-hKsCa3Z2Y67-IjGNpnVXJP7wV0tM0-G6iNm7vUGlvV0EYnYx'
    }
});