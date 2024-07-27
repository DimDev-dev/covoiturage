import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { login, signup } from "@/utils/postApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const connect = () => {
  const navigate = useNavigate();

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm();
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    watch: watchSignup,
    formState: { errors: signupErrors },
  } = useForm();

  const onSubmitLogin = async (data) => {
    await login(data);
    navigate("/welcome");
  };

  const onSubmitSignup = async (data) => {
    if (data.password === data.repeatPassword) {
      await signup(data);
      navigate("/welcome");
    } else null;
  };
  const repeatPassword = watchSignup("password");
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <form className="space-y-4" onSubmit={handleSubmitLogin(onSubmitLogin)}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...registerLogin("email", { required: "Email requis" })}
            />
          </div>
          {loginErrors.email && (
            <span className="text-destructive">
              {loginErrors.email.message}
            </span>
          )}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...registerLogin("password", { required: "Password requis" })}
            />
          </div>
          {loginErrors.password && (
            <span className="text-destructive">
              {loginErrors.password.message}
            </span>
          )}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </TabsContent>
      <TabsContent value="signup">
        <form
          className="space-y-4"
          onSubmit={handleSubmitSignup(onSubmitSignup)}
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...registerSignup("email", { required: "Email requis" })}
            />
          </div>
          {signupErrors.email && (
            <span className="text-destructive">
              {signupErrors.email.message}
            </span>
          )}
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              {...registerSignup("password", { required: "Password requis" })}
            />
          </div>
          {signupErrors.password && (
            <span className="text-destructive">
              {signupErrors.password.message}
            </span>
          )}
          <div className="space-y-2">
            <Label htmlFor="repeatPassword">Répeter le mot de passe</Label>
            <Input
              id="repeatPassword"
              type="password"
              {...registerSignup("repeatPassword", {
                required: true,
                validate: (value) =>
                  value == repeatPassword || "mot de passe different",
              })}
            />
          </div>
          {signupErrors.repeatPassword && (
            <span className="text-destructive">
              {signupErrors.repeatPassword.message}
            </span>
          )}
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
};

export default connect;
