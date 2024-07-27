// import React from "react";

// const logout = () => {
//   return (
//     <div
//       className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
//       role="alert"
//     >
//       <p className="font-bold">Voulez-vous vraiment vous deconnecté ?</p>
//     </div>
//   );
// };

// export default logout;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LogoutConfirmation = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Déconnexion reussi");
  };

  const handleCancel = () => {
    navigate("/welcome");
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle>Se déconnecter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription>
          Êtes-vous sûr de vouloir vous déconnecter ? Vous serez redirigé vers
          la page de connexion.
        </CardDescription>
        <div className="flex justify-end gap-2">
          <Button onClick={() => handleCancel()} variant="outline">
            Annuler
          </Button>
          <Button onClick={() => handleConfirm()}>Se déconnecter</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LogoutConfirmation;
