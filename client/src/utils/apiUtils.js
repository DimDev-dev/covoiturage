import axios from "axios";
import { toast } from "sonner";

export const onDelete = (annonceId, userId, setUserAnnouncements) => {
  const token = localStorage.getItem("token");
  const _id = localStorage.getItem("userId");

  if (_id === userId) {
    axios
      .delete(`http://localhost:3000/api/announcement/${annonceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Suppression reussi");
        setUserAnnouncements((prevAnnouncements) =>
          prevAnnouncements.filter((annonce) => annonce._id !== annonceId)
        );
      })
      .catch((error) => {
        toast.error(
          "Une erreur est survenue, si cela perciste veuillez nous contacter"
        );
      });
  } else toast.warning("Vous êtes pas autorisé à supprimer cette annonce");
};

export const onEdit = async (annonceId, updatedData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(
      `http://localhost:3000/api/announcement/${annonceId}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("Modification réussie toto");
    return response.data;
  } catch (error) {
    toast.error(
      "Une erreur est survenue, si cela persiste, veuillez nous contacter"
    );
    throw error;
  }
  z;
};
