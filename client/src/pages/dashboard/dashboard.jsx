/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import DataCard from "@/composant/cardAnnonce/dataCard";
import { getAnnouncement } from "@/utils/getApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAnnouncement(setData);
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <div className=" flex flex-col justify-center">
          <p className="font-bold text-white">
            Aucune annonce disponible pour le moment.
          </p>
        </div>
      ) : (
        <div className="py-5 h-full">
          <h1 className="text-primary text-2xl text-center font-bold mb-4">
            Annonce
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pb-5">
            {data.map((annonce) => (
              <Link
                to={`/annonce/${annonce._id}`}
                key={annonce._id}
                className="border-solid shadow-md rounded-md m-4"
              >
                <DataCard
                  country={annonce.country}
                  lastname={annonce.lastname}
                  firstname={annonce.firstname}
                  team={annonce.team}
                  description={annonce.description}
                  userId={annonce.userId}
                  annonceId={annonce._id}
                  showCloseBtn={false}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default dashboard;
