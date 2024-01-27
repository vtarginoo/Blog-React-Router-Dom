import { Route, Routes, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../../componentes/postModelo";
import ReactMarkdown from "react-markdown";
import "./post.css";
import NaoEncontrado from "../naoEncontrado";
import PaginaPadrao from "../../componentes/paginaPadrao/paginaPadrao";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id == Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrado />;
  }

  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
    </PaginaPadrao>
  );
}
