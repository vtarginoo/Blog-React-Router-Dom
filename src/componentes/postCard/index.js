import { Link } from "react-router-dom";
import styles from "./postCard.module.css";
import BotaoPrincipal from "../botaoPrincipal";

export default function PostCard({ post }) {
  const caminhoDaImagem = `/assets/posts/${post.id}/capa.png`;

  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={caminhoDaImagem}
          alt={`imagem de capa do post ${post.id}`}
        />

        <h2 className={styles.titulo}> {post.titulo}</h2>

        <BotaoPrincipal tamanho={"lg"}> Ler </BotaoPrincipal>
      </div>
    </Link>
  );
}
