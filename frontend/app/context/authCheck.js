"use client";
import routes from "../routes";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function authCheck() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push(routes.auth);
    }
  }, [user, router]);

  return user;
}
