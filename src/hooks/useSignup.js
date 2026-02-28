import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { apiUrl } from "../config/api";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl("/api/user/signup"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || "Signup failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    } catch (networkError) {
      setIsLoading(false);
      setError("Unable to reach server. Please try again.");
    }
  };

  return { signup, isLoading, error };
};
