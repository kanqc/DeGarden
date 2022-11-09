import * as request from "../utils/request";

export const getProducts = async () => {
  try {
    const res = await request.get("/Product", {});
    return res;
  } catch (error) {
    console.log(error);
  }
};
