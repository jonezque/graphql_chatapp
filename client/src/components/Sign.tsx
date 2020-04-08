import React, { useRef } from "react";
import { useHistory } from "react-router";

export const Sign: React.FC<{ func: (username: string, password: string, callback?: () => void) => void; title: string }> = ({func, title}) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  return (
    <form className="centersign" >
      <input ref={nameRef}></input>
      <input ref={passwordRef}></input>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          if (nameRef.current?.value && passwordRef.current?.value) {
            func(nameRef.current?.value, passwordRef.current?.value, () => history.push('/'));
          }
        }}
      >
        {title}
      </button>
    </form>
  );
};
