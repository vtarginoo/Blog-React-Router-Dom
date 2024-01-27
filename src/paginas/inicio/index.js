import styles from "./inicio.module.css";
import posts from "../../json/posts.json";
import Post from "../../componentes/postCard";

export default function Inicio() {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={posts.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
