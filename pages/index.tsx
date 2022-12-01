import styles from "./styles.module.scss";
import Logo from "./assents/logo";
import Vector from "./assents/vector";
import Image from "next/image";
import Dog from "../public/images/dog.jpg";
import Head from "next/head";
import { useState } from "react";
import Modal from "./components/Modal/modal";
import Text from "./components/Text/Text";
import Pin from "./components/Pin/Pin";
import Gmail from "./components/Gmail/Gmail";
import Telefone from "./components/Telefone/telefone";
import CheckIcon from "./components/CheckIcon/CheckIcon";
import Link from "./components/Link/link";
import Button from "./components/Button/Button";

export default function Home() {
  const [modalSuccessOpened, setModalSuccessOpened] = useState(false);
  const handleSubmit = async () => {
    setModalSuccessOpened(true);
  };

  const [modalOpened, setModalOpened] = useState(false);
  const handSubmit = async () => {
    setModalOpened(true);
  };

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
            <Button className={styles.button} onClick={handleSubmit}>
              Contribuir
            </Button>
            <Button className={styles.contact} onClick={handSubmit}>
              Entrar em contato
            </Button>
          </div>
        </div>
        <div className={styles.dog}>
          <Image alt="cachorro" src={Dog} />
          <div className={styles.food}></div>
        </div>
      </div>

      <Modal
        open={modalSuccessOpened}
        onClose={() => setModalSuccessOpened(false)}
      >
        <div>Oi</div>
      </Modal>

      <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
        <div className={styles.modal}>
          <div className={styles.modalTitle}>
            <CheckIcon />
            <h1>Formas de contato</h1>
          </div>

          <div className={styles.contacts}>
            <div className={styles.modalSettings}>
              <Pin />
              <Text>Através do endereço: Rua das Flores nº 82 lote 07</Text>
            </div>

            <div className={styles.modalSettings}>
              <Telefone />
              <Text>Telefones: (11) 9 9292-9711 / (11) 9 81815251</Text>
            </div>

            <div className={styles.modalSettings}>
              <Gmail />
              <Text>Email: helpdog.doacoes@ajudeocachorrinho.com.br</Text>
            </div>
          </div>

          <div className={styles.finalModal}>
            <Button className={styles.btnModal} onClick={() => setModalOpened(false)}>Retornar</Button>
            <Logo />
          </div>
        </div>
      </Modal>
    </>
  );
}
