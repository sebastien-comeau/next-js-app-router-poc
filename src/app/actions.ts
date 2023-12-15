"use server";

export async function formSubmit(prevState: any, form: FormData) {
  // let name = form.get("name");
  // let email = form.get("email");

  return {
    errors: {
      name: "Name error",
      email: "Email error",
    }
  }
}
