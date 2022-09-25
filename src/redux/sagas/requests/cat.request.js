
import axios from 'axios';
export const requestGetCats = async () => await axios.get("https://api.thecatapi.com/v1/breeds");
