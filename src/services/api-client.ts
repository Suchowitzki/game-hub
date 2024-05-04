import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "44be11214e4c42feb4661443fe6a553f"
    }
});