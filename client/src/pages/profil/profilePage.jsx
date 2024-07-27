import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUser } from "@/utils/getApi";
import { putUser } from "@/utils/putApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const profilePage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [user, setUser] = useState(Object);

  useEffect(() => {
    getUser(setValue, setUser);
  }, []);

  const onSubmit = (data) => {
    putUser(data, setUser);
  };

  return (
    <Card className="w-full max-w-md relative">
      <CardHeader>
        <CardTitle>
          <Avatar className="h-44 w-full -translate-x-1/2 left-1/2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <p>{user.firstname}</p>
        </div>
        <div className="grid gap-2">
          <p>{user.lastname}</p>
        </div>
        <div className="grid gap-2">
          <p>{user.team}</p>
        </div>
        <div className="grid gap-2">
          <p>{user.country}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firstname" className="text-right">
                  Nom
                </Label>
                <Input
                  id="firstname"
                  {...register("firstname")}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastname" className="text-right">
                  Prénom
                </Label>
                <Input
                  id="lastname"
                  {...register("lastname")}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="imageprofile" className="text-right">
                  Photo de profil
                </Label>
                <Input
                  id="imageprofile"
                  type="file"
                  {...register("imageprofile")}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                  Ville
                </Label>
                <Input
                  id="country"
                  {...register("country")}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="team" className="text-right">
                  Equipe
                </Label>
                <Input id="team" {...register("team")} className="col-span-3" />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit">Enregistrer</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default profilePage;
