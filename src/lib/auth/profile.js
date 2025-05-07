import api from "../axios";

export const profile = async () => {
  const { data } = await api.get("/users/profile");
  console.log("history:", data);
  return data;
};
