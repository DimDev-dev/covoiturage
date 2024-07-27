import DataCard from "@/composant/cardAnnonce/dataCard";
import { getAnnouncementById } from "@/utils/getApi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

function Annonce() {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const _id = localStorage.getItem("userId");

  useEffect(() => {
    getAnnouncementById(id, setAnnonce);
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  const onDelete = () => {
    if (annonce.userId === _id) {
      axios
        .delete(`http://localhost:3000/api/announcement/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success("Suppression reussi");
          navigate("/dashboard");
        })
        .catch((error) => {
          toast.error(
            "Une erreur est survenue, si cela perciste veuillez nous contacter"
          );
        });
    } else toast.warning("Vous êtes pas autorisé à supprimer cette annonce");
  };
  const onEdit = () => {
    if (annonce.userId === _id) {
      navigate(`/modifyAnnonce/${id}`);
    } else toast.warning("Vous êtes pas autorisé à modifié cette annonce");
  };

  if (!annonce) {
    return (
      <div>
        <h2>Chargement en cours...</h2>
      </div>
    );
  }
  return (
    <DataCard
      country={annonce.country}
      lastname={annonce.lastname}
      firstname={annonce.firstname}
      team={annonce.team}
      description={annonce.description}
      onEditClick={onEdit}
      onDeleteClick={onDelete}
      handleClick={handleClick}
      userId={annonce.userId}
      annonceId={annonce._id}
      _id={_id}
      showCloseBtn={true}
    />
  );
}

export default Annonce;
