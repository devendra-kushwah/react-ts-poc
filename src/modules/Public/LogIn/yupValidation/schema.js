import * as yup from 'yup';

const schema = yup.object().shape({
    mobile: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })

export default schema;