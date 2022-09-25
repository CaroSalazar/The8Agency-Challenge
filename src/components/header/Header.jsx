import "./Header.styles.css";
const Header = () => {
  return (
    <header>
      <div className="container-header">
        <div className="webinar-header">webinar</div>
        <p className="title1-header">
          El reto de humanizar el CX financiero en 2021.
        </p>
        <p className="title2-header">La experiencia de un Unicornio de Latam</p>
        <p className="title3-header">
          Miércoles 16 de diciembre | 17 hs (Horario de Quito)
        </p>
      </div>
    </header>
  );
};
export default Header;