import React, { useRef } from "react";
import { changeName } from "../mutations";
import { useHistory } from "react-router-dom";

export const Profile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  return (
    <div className="centersign">
      <input ref={inputRef} placeholder="new username"></input>
      <button
        onClick={() => {
          changeName(inputRef.current?.value || "", () =>
            history.push("/chat")
          );
        }}
      >
        change
      </button>
    </div>
  );
};
