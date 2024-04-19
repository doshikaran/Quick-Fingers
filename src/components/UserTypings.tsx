import React from 'react'
import Characters from './Characters';
import Caret from './Caret';

interface Props {
    userInput: string,
    words: string,
    className?: string
}

const UserTypings = ({userInput, words, className}: Props) => {
    const typedCharacters = userInput.split("");
  return (
    <div className={className}>
      {typedCharacters.map((char, index) => (
        <Characters
          key={`${char}_${index}`}
          actual={char}
          expected={words[index]}
        />
      ))}
      <Caret />
    </div>
  )
}

export default UserTypings