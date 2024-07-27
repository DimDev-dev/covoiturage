import DataCard from "@/composant/cardAnnonce/dataCard";
import { getUserAnnouncement } from "@/utils/getApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onDelete } from "./../../utils/apiUtils";

const UserAnnounce = () => {
  const [userAnnouncements, setUserAnnouncements] = useState([]);
  const navigate = useNavigate();
  const _id = localStorage.getItem("userId");

  useEffect(() => {
    getUserAnnouncement(setUserAnnouncements);
  }, []);

  const handleEdit = (id) => {
    navigate(`/modifyAnnonce/${id}`);
  };

  return (
    <div className="py-5 h-full">
      <h2 className="text-primary text-2xl text-center font-bold mb-4">
        Mes annonces
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pb-5">
        {userAnnouncements.map((annonce) => (
          <DataCard
            key={annonce._id}
            country={annonce.country}
            lastname={annonce.lastname}
            firstname={annonce.firstname}
            team={annonce.team}
            description={annonce.description}
            userId={annonce.userId}
            annonceId={annonce._id}
            onDeleteClick={() => {
              onDelete(annonce._id, annonce.userId, setUserAnnouncements);
            }}
            onEditClick={() => handleEdit(annonce._id)}
            _id={_id}
            showCloseBtn={false}
          />
        ))}
      </div>
    </div>
  );
};

export default UserAnnounce;
