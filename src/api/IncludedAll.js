import axios from "../lib/axios.js";

export default class IncludedAll {
  getSearchbarItems = async () => axios.get("/search");
}
