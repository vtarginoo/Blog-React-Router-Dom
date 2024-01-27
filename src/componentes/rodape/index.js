import styles from "./rodape.module.css";
import Logo from "../../assets/logo.png";

export default function Rodape() {
  const caminhoLogo = "../src/assets/posts/1/capa.png";

  return (
    <footer className={styles.rodape}>
      <img className="imagemlogo" src={Logo} alt={"Logo Luke"} />
      .Desenvolvido por Luke Company
    </footer>
  );
}
