import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useForm } from "react-hook-form";

function CreateProfil() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const profilData = { ...data, userId };
      const response = await axios.post(
        "http://localhost:3000/api/users",
        profilData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Création de profil</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Profile Picture
            </Label>
            <Input
              id="image"
              type="file"
              className="col-span-3"
              {...register("imageprofile")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstname" className="text-right">
              First Name
            </Label>
            <Input
              id="firstname"
              className="col-span-3"
              {...register("firstname", { required: "firstname requis" })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastname" className="text-right">
              Last Name
            </Label>
            <Input
              id="lastname"
              className="col-span-3"
              {...register("lastname", { required: "lastname requis" })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="country" className="text-right">
              City
            </Label>
            <Input
              id="country"
              className="col-span-3"
              {...register("country", { required: "ville  requis" })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="team" className="text-right">
              Team
            </Label>
            <Input
              id="team"
              className="col-span-3"
              {...register("team", { required: "Equipe requis" })}
            />
          </div>
          <Button type="submit">Creation du profil</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CreateProfil;
