import React from "react";
import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

interface Props {}

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonref = useRef<HTMLButtonElement>(null);
  const handleclick = () => {
    buttonref.current?.blur();
    handleRestart();
  };
  return (
    <button 
    className={`block rounded px-8 py-2 hover:bg-slate-200/50   ${className}`}
    tabIndex={-1} ref={buttonref} onClick={handleclick}>
      <MdRefresh className=" h-5 w-5" />
    </button>
  );
};

export default RestartButton;
