import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";
import Image from "next/image";
import Modal from "../components/Modal";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { toast } from "react-toastify";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home: NextPage = () => {
  const notify = () =>
    toast("🦄 Wow so easy!");

  return (
    <>
      <Head>
        <title>Builderz Solana dApp Scaffold</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container} `}>
        <div className=" dark:bg-black text-black dark:text-white  bg-inherit p-[1.25rem]">
          <div className="flex flex-col justify-center p-4 bg-inherit gap-10">
            <div className={styles.iconContainer}>
              <a
                href="https://builderz.build"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                  src="/images/builderz-symbol.svg"
                  height={60}
                  width={50}
                  style={{
                    objectFit: "contain",
                  }}
                  alt="builderz"
                />
              </a>
              <Image
                width={75}
                height={75}
                src="/sol.png"
                className={styles.icon}
                alt="sol"
              />
            </div>
            <h1 className="text-black dark:text-white">Hello Solana, meet Builderz.dev 👋</h1>
            <p className={`${styles.explain} text-black dark:text-white`}>
              Explore what you can do with Builderz&rsquo; brand new{" "}
              <b>Builderz Solana dApp Scaffold</b>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-around  items-center py-8">
              <button onClick={notify} className="btn glow-on-hover">
                Notify!
              </button>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
