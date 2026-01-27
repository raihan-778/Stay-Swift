"use client";
import { signOut } from "next-auth/react";
const Logout = () => {
  return (
    <button
      className="btn-primary"
      onClick={() => {
        signOut({ callbackUrl: "http://localhost:3000/login" });
      }}
    >
      Sign Out
    </button>
  );
};

export default Logout;
