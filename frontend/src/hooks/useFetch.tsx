import axios from "axios";

interface Props {
  url: string;
  method: "POST" | "DELETE" | "PATCH" | "GET";
  multipart?: boolean;
  data?: {
    // [key as string]: unknown
  };
  options?: {
    headers: {
      // [key as string]: unknown
    };
    params: {};
  };
}

export const useFetch = () => {
  return async ({
    url,
    data,
    method = "GET",
    multipart = false,
    options = {
      headers: {},
      params: {},
    },
  }: Props) => {
    const res = await axios({
      url,
      method,
      data,
      headers: {
        "Content-Type": multipart ? "multipart/form-data" : "application/json",
      },
      params: options.params,
    });
    return res.data;
  };
};

export default useFetch;
