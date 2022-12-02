import styles from "./styles.module.scss";
import Logo from "../assents/logo";
import Vector from "../assents/vector";
import Image from "next/image";
import Dog from "../../public/images/dog.jpg";
import Head from "next/head";
import { useState } from "react";
import Modal from "../components/Modal/modal";
import Text from "../components/Text/Text";
import Pin from "../components/Pin/Pin";
import Gmail from "../components/Gmail/Gmail";
import Telefone from "../components/Telefone/telefone";
import CheckIcon from "../components/CheckIcon/CheckIcon";
import Link from "../components/Link/link";
import Button from "../components/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "../components/TextField/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InputAdornment from "../components/InputAdornment/InputAdornment";
import HappyDog from "../../public/images/payDog.png";
import Brasil from "../../public/images/br.png";
import EUA from "../../public/images/en.png";

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
            <div className={styles.centerText}>Help those who need help</div>
            <Vector />
          </div>

          <div className={styles.subText}>
            With just 1 real you can help me feed stray dogs.
          </div>

          <div className={styles.btnList}>
            <Button className={styles.button} onClick={handleSubmit}>
              Contribute
            </Button>
            <Button className={styles.contact} onClick={handSubmit}>
              Talk to us
            </Button>
          </div>
        </div>
        <div>
          <div className={styles.content}>
            <Link href={`../`}>
              <Image alt="Brasil" src={Brasil} width={60} />
            </Link>
            <Link href="#">
              <Image alt="Estados Unidos" src={EUA} width={41} />
            </Link>
          </div>
          <div className={styles.dog}>
            <Image alt="cachorro" src={Dog} />
            <div className={styles.food}></div>
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
            <h1>Contribution Form</h1>
          </div>
          <div className={styles.form}>
            <div className={styles.formFormat}>
              <TextField topLabel="Name :" size="small" />
              <TextField topLabel="Last name :" size="small" />
            </div>
            <div className={styles.formFormat}>
              <TextField topLabel="Address :" size="small" />
              <TextField topLabel="CEP :" size="small" maxWidth={150} />
            </div>
            <div className={styles.formFormat}>
              <TextField topLabel="Landline :" size="small" />
              <TextField topLabel="Cell phone :" size="small" />
            </div>
            <div className={styles.formPay}>
              <TextField
                topLabel="Amount to be donated :"
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
                Finalize
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
            <h1>Contact Forms</h1>
          </div>

          <div className={styles.contacts}>
            <div className={styles.modalSettings}>
              <Pin />
              <Text>Through the address: Rua das Flores nº 82 lote 07</Text>
            </div>

            <div className={styles.modalSettings}>
              <Telefone />
              <Text>Phones: (11) 9 9292-9711 / (11) 9 81815251</Text>
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
              Turn back
            </Button>
            <Logo />
          </div>
        </div>
      </Modal>
      <Modal open={finalModal} onClose={() => setFinalModal(false)}>
        <div>
          <div className={styles.paymentModal}>
            <h1>
              Thank you for your interest and contribution <br /> in our Project
            </h1>
            <Text fontWeight={600}>
              You will shortly receive a text message at
              <br />
              your cell phone to complete the payment <br />
              of your donation.
            </Text>
          </div>
          <Image alt="DogHappy" src={HappyDog} />
        </div>
      </Modal>
    </>
  );
}
