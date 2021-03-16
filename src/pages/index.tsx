import { NextPage } from "next";
import React, { FC, useState } from "react";
import Countdown from "react-countdown";

const initialStamina = [
  { id: 1, component: <div>a</div> },
  { id: 2, component: <div>a</div> },
  { id: 3, component: <div>a</div> },
  { id: 4, component: <div>a</div> },
];

type StaminaType = {
  id: number;
  component: Element;
};

const Index: NextPage<FC> = () => {
  const [count, setCount] = useState<number>(Date.now() + 5000)
  const [staminas, setStaminas] = useState<any>(initialStamina);

  const resetCount = () => {
    setCount(Date.now() + 5000);
    increaseStamina();
  }

  const increaseStamina = () => {
    if (staminas.length < 5) {
      setStaminas((staminas: any) => [...staminas, { id: 5, component: <div>a</div> }]);
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
      <div>
        {staminas.map((stamina: StaminaType) => (
          <div key={stamina.id}>{stamina.component}</div>
        ))}
      </div>
      <div>
        <Countdown
          date={count}
          onComplete={resetCount}
          overtime={true}
          renderer={renderer}
        />
      </div>
    </>
  );
};

export default Index;
