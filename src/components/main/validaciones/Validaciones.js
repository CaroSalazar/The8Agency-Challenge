import * as Yup from "yup";

const required = "Required";

const ValidationSchema = () =>
  Yup.object().shape({
    name: Yup.string()
      .min(3, "La cantidad mínima de caracteres es 3")
      .matches(/^[aA-zZ\s]+$/, "El nombre debe contener solo letras")
      .required(required),
    lastname: Yup.string()
      .min(4, "La cantidad mínima de caracteres es 4")
      .matches(/^[aA-zZ\s]+$/, "El apellido debe contener solo letras")
      .required(required),
    email: Yup.string().email("Debe ser un email válido").required(required),
    country: Yup.string().required(required),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Ingrese número válido"
      )
      .required(required),
    position: Yup.string()
    .min(3, 'La cantidad mínima de caracteres es 3')
    .max(15, 'Superaste la cantidad mínima de caracteres')
    .required(required),
  });

export default ValidationSchema;
