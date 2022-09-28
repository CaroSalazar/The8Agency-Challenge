import "./Form.styles.css";
import { useState } from "react";
import { useFormik } from "formik";
import validationSchema from "../validaciones/Validaciones";
import Modal from "../modal/Modal";

export const Form = () => {
  const [show, setShow] = useState(false);

  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    country: "",
    phone: "",
    position: "",
  };

  const onSubmit = (values) => {
    localStorage.setItem("attendee", JSON.stringify(values));
    resetForm();
    setShow(true);
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = formik;

  return (
    <>
      {show && <Modal setShow={setShow} />}

      <div className="container-form">

        <h4 className="title-form">¡Inscríbete y reserva tu lugar ahora!</h4>
        <form className="form" onSubmit={handleSubmit}>
          <div className="container-label-input">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              className={errors.name && touched.name ? "error" : ""}
            />
            {errors.name && touched.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div className="container-label-input">
            <label htmlFor="lastname"> Apellido</label>
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              value={values.lastname}
              onBlur={handleBlur}
              className={errors.lastname && touched.lastname ? "error" : ""}
            />
            {errors.lastname && touched.lastname && (
              <span className="error-message">{errors.lastname}</span>
            )}
          </div>
          <div className="container-label-input">
            <label htmlFor="email">Correo electrónico del trabajo</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "error" : ""}
            />
            {errors.email && touched.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="container-label-select">
            <label htmlFor="country"> País</label>
            <select
              name="country"
              onChange={handleChange}
              value={values.country}
              onBlur={handleBlur}
              className={errors.country && touched.country ? "error" : ""}
            >
              <option value="">Elige un país</option>
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Brasil">Brasil</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Perú">Perú</option>
              <option value="Uruguay">Uruguay </option>
              <option value="Venezuela">Venezuela</option>
              <option value="México">México</option>
              <option value="Cuba">Cuba</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Guatemala">Guatemala</option>
            </select>
            {errors.country && touched.country && (
              <span className="error-message">{errors.country}</span>
            )}
          </div>
          <div className="container-label-input">
            <label className="label-form" htmlFor="phone">
              Número de teléfono
            </label>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              onBlur={handleBlur}
              className={errors.phone && touched.phone ? "error" : ""}
            />
            {errors.phone && touched.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>
          <div className="container-label-input">
            <label htmlFor="position">Puesto de trabajo</label>
            <input
              type="text"
              name="position"
              onChange={handleChange}
              value={values.position}
              onBlur={handleBlur}
              className={errors.position && touched.position ? "error" : ""}
            />
            {errors.position && touched.position && (
              <span className="error-message">{errors.position}</span>
            )}
          </div>
          <button className="button-form" type="submit">
            Inscríbete
          </button>
        </form>
      </div>

    </>
  );
};
