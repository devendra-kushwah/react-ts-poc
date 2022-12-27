import * as yup from "yup";

const emailSchema = yup.object().shape({
  email: yup.string().required("Please Fill your email ID"),
});

const passwordSchema = yup.object().shape({
  password: yup.string().required("Please Fill your password").min(3)
})

export { emailSchema, passwordSchema };
