import React from "react";
import { signUp } from "../mutations";
import { Sign } from ".";

export const SignUp: React.FC = () => (
  <Sign func={signUp} title="Зарегистироваться" />
)