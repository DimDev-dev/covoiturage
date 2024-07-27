import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { postAnnouncement } from "@/utils/postApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Annonce = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const onSubmit = async (data) => {
    postAnnouncement(data);
    navigate("/dashboard");
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Ajouter votre annonce</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            {/* Last name et First name */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <Label htmlFor="lastname" className="mb-2">
                  Last name
                </Label>
                <Input
                  {...register("lastname", { required: "Last name requis" })}
                  id="lastname"
                  placeholder="Last name"
                  className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                {errors.lastname && (
                  <span className="text-red-500">
                    {errors.lastname.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <Label htmlFor="firstname" className="mb-2">
                  First name
                </Label>
                <Input
                  {...register("firstname", { required: "First name requis" })}
                  id="firstname"
                  placeholder="First name"
                  className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                {errors.firstname && (
                  <span className="text-red-500">
                    {errors.firstname.message}
                  </span>
                )}
              </div>
            </div>

            {/* Team et Country */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <Label htmlFor="team" className="mb-2">
                  Equipe
                </Label>
                <Select
                  id="team"
                  onValueChange={(value) => setValue("team", value)}
                  className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="o1">o1</SelectItem>
                    <SelectItem value="i1">i1</SelectItem>
                    <SelectItem value="o2">o2</SelectItem>
                    <SelectItem value="i2">i2</SelectItem>
                    <SelectItem value="o3">o3</SelectItem>
                    <SelectItem value="i3">i3</SelectItem>
                    <SelectItem value="vs">VS</SelectItem>
                    <SelectItem value="sd">SD</SelectItem>
                    <SelectItem value="acdc">ACDC</SelectItem>
                    <SelectItem value="currently">
                      En cours d'intégration
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.team && (
                  <span className="text-red-500">Ce champ est requis</span>
                )}
              </div>
              <div className="flex flex-col">
                <Label htmlFor="country" className="mb-2">
                  Ville
                </Label>
                <Input
                  {...register("country", { required: "Ville requis" })}
                  id="country"
                  placeholder="Ville"
                  className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                {errors.country && (
                  <span className="text-red-500">{errors.country.message}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col mb-4">
              <Label htmlFor="description" className="mb-2">
                Description
              </Label>
              <Textarea
                {...register("description", { required: "Description requis" })}
                className="rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-gray-500"
                id="description"
                name="description"
                placeholder="Describe your team"
                rows={3}
              />
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>

            {/* Boutons */}
            <div className="flex justify-between">
              <Button onClick={handleClick}>Retour</Button>
              <Button type="submit">Valider</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Annonce;
