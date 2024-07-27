import axios from "axios";
import { toast } from "sonner";

const url = "http://localhost:3000";
const userId = localStorage.getItem("userId");
const token = localStorage.getItem("token");

export const putUser = (data, setUser) => {
  axios
    .put(`${url}/api/users/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        toast.success("Modification réussi");
        return setUser(data);
      } else {
        toast.error("Modification échoué");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
