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
import Button from "./components/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "./components/TextField/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InputAdornment from "./components/InputAdornment/InputAdornment";
import HappyDog from "../public/images/payDog.png";
import Brasil from "../public/images/br.png";
import EUA from "../public/images/en.png";
import Racao from "../public/images/racao.png";

export default function Home() {
  const [modalSuccessOpened, setModalSuccessOpened] = useState(false);
  const handleSubmit = async () => {
    setModalSuccessOpened(true);
  };

  const [modalOpened, setModalOpened] = useState(false);
  const handSubmit = async () => {
    setModalOpened(true);
  };

  const [finalModal, setFinalModal] = useState(false);
  const finalSubmit = async () => {
    setFinalModal(true);
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
            <h2>HelpDog</h2>
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
        <div>
          <div className={styles.content}>
            <a href="#">
              <Image alt="Brasil" src={Brasil} width={60} />
            </a>
            <a href={`/EnglishPage`}>
              <Image alt="Estados Unidos" src={EUA} width={41} />
            </a>
          </div>
          <div className={styles.dog}>
            <Image alt="cachorro" src={Dog} />
            <div className={styles.food}>
              <Image alt="Ração" src={Racao} />
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={modalSuccessOpened}
        onClose={() => setModalSuccessOpened(false)}
      >
        <div className={styles.formModal}>
          <div className={styles.formTitle}>
            <EditIcon />
            <h1>Formulário de Contribuição</h1>
          </div>
          <div className={styles.form}>
            <div className={styles.formFormat}>
              <TextField topLabel="Nome :" size="small" />
              <TextField topLabel="Sobrenome :" size="small" />
            </div>
            <div className={styles.formFormat}>
              <TextField topLabel="Endereço :" size="small" />
              <TextField topLabel="CEP :" size="small" maxWidth={150} />
            </div>
            <div className={styles.formFormat}>
              <TextField topLabel="Telefone Fixo :" size="small" />
              <TextField topLabel="Telefone Celular :" size="small" />
            </div>
            <div className={styles.formPay}>
              <TextField
                topLabel="Valor a ser doado :"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={styles.finalModal}>
              <Button className={styles.btnModal} onClick={finalSubmit}>
                Finalizar
              </Button>
              <Logo />
            </div>
          </div>
        </div>
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
            <Button
              className={styles.btnModal}
              onClick={() => setModalOpened(false)}
            >
              Retornar
            </Button>
            <Logo />
          </div>
        </div>
      </Modal>
      <Modal open={finalModal} onClose={() => setFinalModal(false)}>
        <div>
          <div className={styles.paymentModal}>
            <h1>
              Obrigado pelo interesse e contribuição <br /> em nosso Projeto
            </h1>
            <Text fontWeight={600}>
              Em breve você receberá uma mensagem de texto em <br />
              seu celular para finalizar o pagamento <br />
              de sua doação.
            </Text>
          </div>
          <Image alt="DogHappy" src={HappyDog} />
        </div>
      </Modal>
    </>
  );
}
