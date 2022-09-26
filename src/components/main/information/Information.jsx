import "./Information.styles.css";
import Group5 from "../../../assets/Group 5.jpg";
import data from "./data";

export const Information = () => {
  return (
    <>
    <div className="container-info">
      <img className="sponsors" src={Group5} alt="sponsors" />
      <p className="informative-paragraph">
        Te invitamos a este webinar, donde trataremos la temática de cómo
        humanizar la experiencia del cliente de Banca y Seguros en el nuevo
        entorno digital.
      </p>
      <p className="informative-paragraph">
        Además podremos conocer las estrategias que aplicó LOREM para generar
        una experiencia memorable para sus clientes, mientras se convertía en el
        Unicornio de LATAM.
      </p>
      <p className="informative-paragraph">Escucha de primera mano la voz de nuestros especialistas:</p>
      <div className="container-specialists">
        {data?.length
          ? data.map((data) => {
              return (
                <div className="container-specialist" key={data.id}>
                  <img className="image-specialist" src={data.img} alt="img-specialist" />
                  <div className="info-speacialist">
                    <p className="name-specialist">{data.name}</p>
                    <p className="position-specialist">{data.position}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <p className="informative-paragraph">
        Participa e inspírate para innovar y mejorar la interacción entre
        clientes y marcas con historias de éxito de empresas del ámbito
        financiero en América Latina.
      </p>
      <p className="informative-paragraph">¡Te esperamos!</p>
      <img className="sponsors" src={Group5} alt="sponsors" />
    </div>
      
        </>
  );
};
