import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background p-4 flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>blaze a ajouter</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to={"/profil"}>
            <DropdownMenuItem>Mon profil</DropdownMenuItem>
          </Link>

          <Link to={"/myannonce"}>
            <DropdownMenuItem>Mes annonces</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Mes favoris</DropdownMenuItem>
          <Link to={"/logout"}>
            <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex gap-4">
        <Button asChild>
          <Link to={"/addAnnonce"}>Proposer une annonce</Link>
        </Button>
        <Button asChild>
          <Link to={"/dashboard"}>Trouver une annonce</Link>
        </Button>
      </div>
    </header>
  );
};
export default Header;
