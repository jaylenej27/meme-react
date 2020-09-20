import React, { useState } from 'react';

// user input form

function Form(props) {
  const [inputText, setInputText] = useState({
    topText: '',
    bottomText: '',
  });

  // calling input from Generator
  props.setTopLineText(inputText.topText);
  props.setBottomLineText(inputText.bottomText);

  // display text while typing
  const handleChangeTop = (e) => {
    const backupBottom = inputText.bottomText;
    setInputText({ topText: e.target.value, bottomText: backupBottom });
  };

  const handleChangeBottom = (e) => {
    const backupTop = inputText.topText;
    setInputText({ bottomText: e.target.value, topText: backupTop });
  };

  return (
    //display the form
    //top input line
    <div className="form">
      <input
        className="input"
        type="input"
        placeholder="Top line text"
        value={inputText.topText}
        onChange={handleChangeTop}
      />
      <br />

      {/* bottom input line */}

      <input
        className="input"
        type="input"
        placeholder="Bottom line text"
        value={inputText.bottomText}
        onChange={handleChangeBottom}
      />
      <br />

      {/* button to apply url and words to meme and create inal image/link */}

      <button
        className="generate"
        type="button"
        onClick={() => props.onSubmit(props.topLineText, props.bottomLineText)}
      >
        Generate!
      </button>
    </div>
  );
}

export default Form;
