/* eslint-disable react/prop-types */
import { useState } from "react";
const Question = ({question, options, length}) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="question">
      <p>{question}</p>
      <div className="option-list">
        {options.map((option, index) => <div key={option.text} className={`option ${selected == index && "selected"}` } onClick={() => setSelected(index)}>{option.text}</div>)}
      </div>
      <div className="footer">
        <div className="score">
          Score: 10
        </div>
        <div className="question-number">
          1 out of {length}
        </div>
        <button className="next">
          Next -&gt;
        </button>
      </div>
    </div>
  )
}

export default Question