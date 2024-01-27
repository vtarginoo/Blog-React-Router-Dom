import styles from "./naoEncontrado.module.css";
import Luke404 from "../../assets/Luke404.jpeg";
import { useNavigate } from "react-router-dom";
import BotaoPrincipal from "../../componentes/botaoPrincipal";

export default function NaoEncontrado() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}> 404</span>
        <h1 className={styles.titulo}> Ops! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?{" "}
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div className={styles.botaoContainer} onClick={() => navegar("/")}>
          <BotaoPrincipal tamanho={"lg"}> Voltar </BotaoPrincipal>
        </div>

        <img className={styles.imagemLuke} src={Luke404} alt="Luke404" />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
