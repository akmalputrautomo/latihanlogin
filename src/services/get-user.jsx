import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchUserData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http
    .get(_key)
    .then((value) => {
      // let DataHasil = {
      //   nama: value.data.data.name,
      //   email: value.data.data.email,
      // };
      // return { data: DataHasil };
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.location.href = "/";
        // alert("eror");
      }
    });
  return data;
};

const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
};
export { fetchUserData, useGetDataUser };
