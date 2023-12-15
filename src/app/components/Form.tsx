"use client";

import { useState } from "react";
import { formSubmit } from "../actions";
import { useFormState } from "react-dom";

export const Form = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();

  const [state, formAction] = useFormState(formSubmit, null);

  // console.log(state,name,email,pathname)
  return (
    <form action={formAction}>
      {state?.errors?.name && <p className="text-red-500">Name error</p>}
      <label className="block">
        Name:
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name ?? ""}
        />
      </label>
      {state?.errors?.email && <p className="text-red-500">Email error</p>}
      <label className="block">
        Email:
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email ?? ""}
        />
      </label>
      <button>submit</button>
    </form>
  );
};
