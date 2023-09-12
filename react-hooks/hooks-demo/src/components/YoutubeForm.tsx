import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css"

type FormValues = {
  name: string;
  email: string;
  message: string;
};
const YoutubeForm = () => {
  //   const handleSubmit = (data : FormValues ) => {
  //     console.log("form submitted ", data);
  //   };

  const onsubmit = (data: FormValues) => {
    console.log("form submitted ", data);
  };

  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState
  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              pattern: { value: /[A-Za-z]/, message: " name is required ! " },
            })}
            formNoValidate
          />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", { required: "this is required !" })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <input type="text" id="message" {...register("message")} />
          <p className="error">{errors.name?.message}</p>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};

export default YoutubeForm;
