import axios from "axios";

export const PhoneService = {
    async getAll() {
        const responce = await axios.get("http://localhost:3000/phones");
        return responce.data;
    },
    async getById(id) {
        const responce = await axios.get(
            `http://localhost:3000/phones?id=${id}`
        );
        return responce.data[0];
    },
};
