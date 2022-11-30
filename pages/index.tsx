import styles from "./styles.module.scss";
import Logo from "./assents/logo";
import Vector from "./assents/vector";
import Image from "next/image";
import Dog from "../public/images/dog.jpg";
import Comida from "../public/images/comida.png";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>HelpDog</title>
      </Head>
      <div className={styles.container}>
        <div>
          <div className={styles.title}>
            <Logo />
            <h3>HelpDog</h3>
          </div>

          <div>
            <div className={styles.centerText}>Ajude quem precisa de ajuda</div>
            <Vector />
          </div>

          <div className={styles.subText}>
            Com apenas 1 real você pode me ajudar a alimentar cães de ruas.
          </div>

          <div className={styles.btnList}>
            <button className={styles.button}>Contribuir</button>
            <button className={styles.contact}>Entrar em contato</button>
          </div>
        </div>
        <div className={styles.dog}>
          <Image alt="cachorro" src={Dog} />
          <div className={styles.food}>
            <Image alt="comida" src={Comida} />
          </div>
        </div>
      </div>
    </>
  );
}
