import { NextPage } from "next";
import React, { ReactNode, FC, useState } from "react";
import Countdown from "react-countdown";

import ConsumeButton from "../components/ConsumeButton";
import UnusedStamina from "../components/UnusedStamina";
import UsedStamina from "../components/UsedStamina";
import StaminaBar from "../components/StaminaBar";

const initialStamina: ReactNode[] = [
  <UnusedStamina />,
  <UnusedStamina />,
  <UnusedStamina />,
  <UnusedStamina />,
  <UnusedStamina />
];

type StaminaType = {
  component: Element;
};

const Index: NextPage<FC> = () => {
  const [count, setCount] = useState<number>(Date.now() + 5000)
  const [staminas, setStaminas] = useState<ReactNode[]>(initialStamina);
  const [unusedStaminaCount, setUnusedStaminaCount] = useState<number>(5);

  const resetCount = () => {
    setCount(Date.now() + 5000);
    increaseStamina();
  }

  const increaseStamina = () => {
    if (unusedStaminaCount < 5) {
      const array = staminas;
      array[unusedStaminaCount] = <UnusedStamina />;
      setStaminas(array);
      setUnusedStaminaCount(unusedStaminaCount + 1);
    }
  }

  const decreaseStamina = () => {
    if (unusedStaminaCount > 0) {
      setUnusedStaminaCount(unusedStaminaCount - 1);
      const array = staminas;
      array[unusedStaminaCount-1] = <UsedStamina />;
      setStaminas(array);
    }
  }

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return null;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  }

  return (
    <>
      <StaminaBar staminas={staminas} />
      <div>
        <Countdown
          date={count}
          onComplete={resetCount}
          overtime={true}
          renderer={renderer}
        />
      </div>
      <ConsumeButton handleClick={decreaseStamina} />
    </>
  );
};

export default Index;
