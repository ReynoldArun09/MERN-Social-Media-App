import { VerfiyEmailToken } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

export default function VerifyAccountPage() {
  const { token } = useParams();
  const navigate = useNavigate();

  const { isSuccess, isLoading } = useQuery({
    queryKey: ["verify-email", token],
    queryFn: () => VerfiyEmailToken(token!),
  });

  if (isSuccess) {
    navigate("/home");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
}
