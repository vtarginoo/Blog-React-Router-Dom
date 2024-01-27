import styles from "./banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import euAdv from "../../assets/eu_adv.jpeg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}> Seja Bem-Vindo </h1>
        <p className={styles.paragrafo}>
          Me chamo Luke, sou um advogado muito bem conceituado na área de
          tecnologia, eu falo de tecnologia, direito e de outros assuntos.
          Espero que você goste dos meus posts e possa me contratar $$$$$$$$
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src={euAdv}
          aria-hidden={true}
          alt="Foto Adv"
        />
      </div>
    </div>
  );
}
