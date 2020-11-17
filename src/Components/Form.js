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

  //display the form
  //top input line
  return (
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

      {/* button to apply url and words to meme and create initial image/link */}

    </div>
  );
}

export default Form;
