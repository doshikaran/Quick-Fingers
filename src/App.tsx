import React from "react";
import RestartButton from "./components/RestartButton";
import Analysis from "./components/Analysis";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helper";
import GeneratedWords from "./components/GeneratedWords";

const App = () => {
  const { typed, errors, totalTyped, words, restart, timeLeft } = useEngine();
  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <Container>
        <GeneratedWords key={words} words={words} />
        <UserTypings
          className="text-xl absolute mb-14"
          words={words}
          userInput={typed}
        />
      </Container>

      <RestartButton
        onRestart={restart}
        className=" mx-auto mt-16 text-gray-900"
      />
      <Analysis
        className=" mt-10"
        errors={errors}
        accuracy={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
};
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3 mb-10">
      {children}
    </div>
  );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-red-500 font-medium">Time: {timeLeft}</h2>;
};

export default App;
