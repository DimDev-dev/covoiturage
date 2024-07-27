import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiCloseCircleLine } from "react-icons/ri";

const DataCard = ({
  country,
  lastname,
  firstname,
  team,
  description,
  onEditClick,
  onDeleteClick,
  handleClick,
  userId,
  annonceId,
  _id,
  showCloseBtn,
}) => {
  return (
    <Card className="w-full max-w-md relative" key={annonceId}>
      {showCloseBtn && (
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          onClick={handleClick}
        >
          <RiCloseCircleLine className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </button>
      )}
      <CardHeader>
        <CardTitle>{country}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <p>{lastname}</p>
        </div>
        <div className="grid gap-2">
          <p>{firstname}</p>
        </div>
        <div className="grid gap-2">
          <p>Team: {team}</p>
        </div>
        <div className="grid gap-2">
          <p>Description: {description}</p>
        </div>

        {_id === userId ? (
          <>
            <Button onClick={() => onEditClick(annonceId)}>Modifier</Button>
            <Button
              onClick={() => onDeleteClick(annonceId)}
              variant="destructive"
            >
              Supprimer
            </Button>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default DataCard;
