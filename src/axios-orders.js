import axios from "axios";

const instance = axios.create({
  baseURL: "https://build-a-burger-72e18.firebaseio.com/"
});
export default instance;
