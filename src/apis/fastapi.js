import axios from "axios";

const FASTAPI_SERVER_IP = `localhost`;
const FASTAPI_SERVER_PORT = `8000`;
const FASTAPI_DEFAULT_URL = `http://${FASTAPI_SERVER_IP}:${FASTAPI_SERVER_PORT}`;

export const fastApiRequest = async (method, url, headers, data) => {
    return await axios({
        method,
        url: `${FASTAPI_DEFAULT_URL}${url}`,
        headers,
        data
    }).catch(error => console.log(error));
}
