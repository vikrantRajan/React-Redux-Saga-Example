
import axios from 'axios';
export const requestGetCats = () => axios.get("https://api.thecatapi.com/v1/breeds");
