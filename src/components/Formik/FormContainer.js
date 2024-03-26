import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
import axios from "axios";

function FormContainer() {
  const [msg, setMsg] = useState(false)
  const initialVals = {
    name: "",
    email: "",
    msg: "",
  };
  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    msg: Yup.string().required("Message is required"),
  });
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // alert(JSON.stringify(values, null, 4))
    // setSubmitting(false)
    // const url = "/portfolio.php"
    // let formData = new FormData
    // formData.append('name', values.name)
    // formData.append('email', values.email)
    // formData.append('msg', values.msg)
    // axios.post(url, formData)
    // .then(response => {
    //   alert(response.data)
    // })
    // .catch(e => {
    //   alert(e)
    // })
    setMsg(true)
    resetForm(true);
  };

  return (
    <div className="container m-auto position-relative">
    {msg? 
      <div className="alert alert-success alert-dismissible fade show" role="alert">
      Your message is sent!
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      : null
    }
    
      <Formik
        initialValues={initialVals}
        validationSchema={validate}
        onSubmit={onSubmit}
      >
        <Form name="contact">
        <input type="hidden" name="form-name" value="contact" />
          <FormControl
            control="input"
            type="text"
            name="name"
            label="Name*"
            id="name"
          />
          <FormControl
            control="input"
            type="email"
            name="email"
            label="Email*"
            id="email"
          />
          <FormControl
            control="textarea"
            name="msg"
            label="Message*"
            id="msg"
          />
          <button className="btn btn-primary my-2 w-100 my-2" type="submit">
            SEND
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormContainer;
