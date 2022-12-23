import  {emailSchema, passwordSchema } from "./schema";

const validator = async (schema, value) => schema.validate(value);

const handlePromiseError = async promise => {
    let errorMessage = "";
    await promise.catch(err => {
      errorMessage = err.message;
    });
    return errorMessage;
  };
  
const validate = (field, value)=> {
    let isError = "";
    switch(field) {
        case "email":
        isError = validator(emailSchema, { email : value });
        break;
        case "password":
        isError = validator(passwordSchema, { password : value });
        break;
        default: 
        return ""
    }
  return handlePromiseError(isError);
}

export default validate;