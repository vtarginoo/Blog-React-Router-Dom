import styles from "./sobreMim.module.css";
import PostModelo from "../../componentes/postModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo={"Sobre mim"}>
      <h3 className={styles.subtitulo}> Olá, eu sou o Luke!!</h3>
      <img
        src={fotoSobreMim}
        alt="FotoSobreMim"
        className={styles.fotoSobreMim}
      ></img>

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mollis velit at ante blandit congue. Aenean egestas fringilla felis, sed
        viverra risus lobortis vel. Fusce ut lacus ac massa auctor vulputate.
        Suspendisse in urna mauris. Praesent non risus ligula. Aenean sed velit
        et sapien blandit pharetra. Maecenas sed consequat nibh, dignissim
        varius elit. Nullam pellentesque consequat lectus ut ultrices. Duis quis
        ornare massa. Nulla sit amet dui felis. Maecenas sapien felis, rhoncus
        vel consequat eu, convallis non risus. Vivamus condimentum, velit at
        ultricies semper, lorem enim venenatis neque, a tempor est libero et
        turpis. Phasellus sollicitudin a ligula id cursus. Vivamus ac nisl
        feugiat, iaculis ante at, posuere purus. Vestibulum a mi sit amet lorem
        fringilla posuere ac at leo. Fusce sit amet imperdiet sem. Nullam at
        lacus viverra, mattis nisl ut, tincidunt magna. In vehicula vitae dui ut
        auctor. Sed et orci quis sem suscipit gravida placerat eget risus.
        Nullam in mauris viverra, tincidunt massa aliquam, lobortis est. Etiam
        vestibulum porttitor nunc, eget egestas purus. Mauris vulputate pharetra
        nisi in mollis. Pellentesque auctor suscipit sagittis. Cras id eros
        odio. In blandit est at consectetur vestibulum. Suspendisse commodo
        pulvinar mi nec accumsan. Nulla accumsan euismod diam, at congue elit
        egestas vitae. Etiam in risus sit amet nulla congue pretium.
        Pellentesque mollis, nisi vitae euismod facilisis, ante magna viverra
        ipsum, nec rutrum justo metus sed velit. Cras eget commodo massa. Proin
        velit tortor, tincidunt eu odio ut, mollis luctus metus.
      </p>
    </PostModelo>
  );
}
