import axios from "axios";

const api = axios.create({
    baseURL: "https://the-one-api.dev/v2",
    headers: {
        "Authorization": "Bearer RbzXpPbPi-ooP-FEkwdj"
    }
});

export default api;