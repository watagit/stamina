import { NextPage } from "next";
import React, { ReactNode, FC, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

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

const Index: NextPage<FC> = () => {
  const [count, setCount] = useState<number>(Date.now() + 10000)
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
      return <span>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    }
  }

  return (
    <div className={"sm:max-w-full"}>
      <div className={"my-10"}>
        <StaminaBar staminas={staminas} />
      </div>
      <div className={"flex justify-center my-10 lg:text-6xl text-3xl"}>
        <Countdown
          date={count}
          onComplete={resetCount}
          overtime={true}
          renderer={renderer}
        />
      </div>
      <div>
        <ConsumeButton handleClick={decreaseStamina} />
      </div>
    </div>
  );
};

export default Index;
