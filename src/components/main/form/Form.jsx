import "./Form.styles.css";

export const Form = () => {
  return (
    <div className="container-form">
      <h4 className="title-form">¡Inscríbete y reserva tu lugar ahora!</h4>
      <form className="form">
        <label className="label-form" htmlFor="name">
          Nombre
          <input className="input-form" type="text" name="name" />
        </label>
        <label className="label-form" htmlFor="lastname">
          Apellido
          <input className="input-form" type="text" name="lastname" />
        </label>
        <label className="label-form" htmlFor="email">
          Correo electrónico del trabajo
          <input className="input-form" type="email" name="email" />
        </label>
        <label className="label-form" htmlFor="country">
          País
          <select className="select-form">
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
        </label>
        <label className="label-form" htmlFor="phone">
          Número de teléfono
          <input className="input-form" type="number" name="phone" />
        </label>
        <label className="label-form" htmlFor="position">
          Puesto de trabajo
          <input className="input-form" type="text" name="position" />
        </label>
        <button className="button-form" type="submit">
          Inscríbete
        </button>
      </form>
    </div>
  );
};
