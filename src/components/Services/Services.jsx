import React, { useState, useEffect } from "react";
import Service from "./Service";
import tag from "../../assets/icons/bx-code-alt.svg";
import like from "../../assets/icons/bxs-like.svg";
import time from "../../assets/icons/bx-timer.svg";
import design from "../../assets/icons/bxs-palette.svg";
import devices from "../../assets/icons/bxs-devices.svg";
import ceo from "../../assets/icons/bx-target-lock.svg";
import {useTranslation} from 'react-i18next';

function Services() {
  const [t] = useTranslation("global");
  const info = [
    {
      id: 1,
      name: t("services.subtitleOne"),
      description:t("services.textOne"),
      img: devices,
    },
    {
      id: 2,
      name: t("services.subtitleTwo"),
      description:t("services.textTwo"),
      img: design,
    },
    {
      id: 3,
      name: t("services.subtitleThree"),
      description:t("services.textThree"),
      img: tag,
    },
    {
      id: 4,
      name: t("services.subtitleFour"),
      description:t("services.textFour"),
      img: like,
    },
    {
      id: 5,
      name: t("services.subtitleFive"),
      description:t("services.textFive"),
      img: time,
    },
    {
      id: 6,
      name: t("services.subtitleSix"),
      description:t("services.textSix"),
      img: ceo,
    },
  ];

  const [service, setService] = useState();

  const onLoad = () => {
    setService(
      info.map((e) => (
        <Service
          key={e.id}
          id={e.id}
          img={e.img}
          title={e.name}
          paragraph={e.description}
        />
      ))
    );
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <section className="services" id="services">
      <div className="services__content">
        <h2 className="title">{t("services.title")}</h2>
        <div className="services__info">{service}</div>
      </div>
    </section>
  );
}

export default Services;
