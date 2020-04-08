import React from "react";
import { signIn } from "../mutations";
import { Sign } from ".";

export const SignIn: React.FC = () => (
  <Sign func={signIn} title="Войти" />
)
