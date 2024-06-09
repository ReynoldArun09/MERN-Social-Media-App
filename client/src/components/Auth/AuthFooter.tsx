import { Link } from "react-router-dom";

interface AuthFooterProps {
  title: string;
}

export default function AuthFooter({ title }: AuthFooterProps) {
  return (
    <div className="flex mt-4 justify-between text-sm">
      <Link to="/reset-password">Forgot your password?</Link>
      <Link to={title === "Sign Up" ? "/" : "/sign-up"} className="text-primary">
        {title === "Sign Up" ? "Already have account? Sign In" : "Are you new? Sign up"}
      </Link>
    </div>
  );
}
