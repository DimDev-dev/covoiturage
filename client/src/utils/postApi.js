import axios from "axios";
import { toast } from "sonner";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
const url = "http://localhost:3000";

export const postAnnouncement = (data) => {
  axios
    .post(`${url}/api/announcement`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 201) {
        toast.success("Annonce ajoutée");
        return res.data;
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("Erreur lors de l'ajout dee l'annonce");
    });
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${url}/api/auth/login`, data);
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem("token", token);
      const userId = response.data.userId;
      localStorage.setItem("userId", userId);
      toast.success("Connexion réussie");
      return response.data;
    }
  } catch (error) {
    toast.error("Erreur lors de la connexion");
  }
};

export const signup = async (data) => {
  try {
    const response = await axios.post(`${url}/api/auth/signup`, data);
    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem("token", token);
      const userId = response.data.userId;
      localStorage.setItem("userId", userId);
      toast.success("Compte créé avec succès");
      return response.data;
    } else {
      toast.error(
        "Quelque chose s'est mal passé lors de la création du compte"
      );
    }
  } catch (error) {
    toast.error("Erreur lors de la création du compte");
  }
};
