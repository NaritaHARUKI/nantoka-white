import axios from "axios";

const PostApi = axios.create({
    baseURL: '/api',
});

export default PostApi
