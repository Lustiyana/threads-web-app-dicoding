import { instance } from "../axios";
import { getAllThreads } from "../path";

export const threadsService = () => {
  return instance({
    url: getAllThreads,
    method: "GET",
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};
