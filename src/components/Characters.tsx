import React from "react";
import cn from "classnames";

interface Props {
  actual: string;
  expected: string;
}

const Characters = ({ actual, expected }: Props) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  return (
    <span
      className={cn({
        "text-red-500 text-sm mb-5": !isCorrect && !isWhiteSpace,
        " text-green-500 text-sm mb-5": isCorrect && !isWhiteSpace,
        "bg-red-500/50 text-sm mb-5": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};

export default Characters;
