/* eslint-disable react/prop-types */
import { useState } from "react";
const Question = ({ quizList, length }) => {
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const disabled = current >= length - 1

  const handleNext = () => {
    setCurrent((prevState) => prevState + 1);
    setSelected(null);
  };

  const handleChoice = (choice) => {
    if(selected) return

    setSelected(choice);

    if(quizList[current].answer == choice) {
      setScore(prevState => prevState + quizList[current].score)
    }

    if(disabled) return;

    setTimeout(() => {
      handleNext()
    }, 1000);
  };


  return (
    <div className='question'>
      <p>{quizList[current].question}</p>
      <div className='option-list'>
        {quizList[current].options.map((option, index) => (
          <div
            key={option}
            className={`option ${
              selected != null && index == quizList[current].answer && "success"
            } ${index == selected && "error"}`}
            onClick={() => handleChoice(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className='footer'>
        <div className='score'>Score: {score}</div>
        <div className='question-number'>
          {current + 1} out of {length}
        </div>
        <button
          className='next'
          onClick={handleNext}
          disabled={disabled}
        >
          Next -&gt;
        </button>
      </div>
    </div>
  );
};

export default Question;
