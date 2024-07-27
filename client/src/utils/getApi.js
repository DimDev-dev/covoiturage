import axios from "axios";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
const url = "http://localhost:3000";

export const getAnnouncement = (setData) => {
  axios
    .get(`${url}/api/announcement`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAnnouncementById = (id, setAnnonce) => {
  axios
    .get(`${url}/api/announcement/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return setAnnonce(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUser = (setValue, setUser) => {
  axios
    .get(`${url}/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setValue("firstname", res.data.firstname);
      setValue("lastname", res.data.lastname);
      setValue("country", res.data.country);
      setValue("team", res.data.team);
      return setUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserAnnouncement = (setUserAnnouncements) => {
  axios
    .get(`${url}/api/announcement/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const filtreAnnonce = response.data.filter(
        (annonce) => annonce.userId === userId
      );
      return setUserAnnouncements(filtreAnnonce);
    })
    .catch((error) => {
      console.error(error);
    });
};
