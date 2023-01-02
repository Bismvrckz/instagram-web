import React from "react";
import { signIn } from "next-auth/react";

function login() {
  async function onSignInClick() {
    try {
      const resSignIn = await signIn("facebook");

      console.log({ resSignIn });
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <p onClick={onSignInClick} className="cursor-pointer">
        LOGIN
      </p>
    </div>
  );
}

export default login;
