import React, { useState, useEffect } from 'react';
import '../App.css';
import Form from './Form';
import DownloadButton from './DLButton';

const openTabButtonStyle = {
  fontSize: '20px',
  fontColor: 'black',
  borderRadius: '8px',
  backgroundColor: 'rgb(134, 166, 175)',
  padding: '.5em',
};

// access api, setState of input & selection
const MemeGenerator = () => {
  const [topLineText, setTopLineText] = useState('');
  const [bottomLineText, setBottomLineText] = useState('');
  const [selection, setSelection] = useState('http://memegen.link/tenguy');
  const [urls, setUrls] = useState([]);
  const [imageNames, setImageNames] = useState([]);
  

  // set full url
  const actualUrl =
    selection + '/' + topLineText + '/' + bottomLineText + '.jpg';
  // console.log(actualUrl);

  const onChangeSelect = (e) => {
    setSelection(e.target.value);
  };

  const handleChangeTop = (e) => {
    const backupBottom = topLineText;
    setInputText({ topLineText: e.target.value, bottomLineText: backupBottom });
  };

  const handleChangeBottom = (e) => {
    const backupTop = inputText.topText;
    setInputText({ bottomLineText: e.target.value, topText: backupTop });
  };

  //this fetch gets the Url list of images from website
  useEffect( () => {
    fetch('https://memegen.link/templates')
      .then((res) => res.json())
      .then((data) => {
        const urls = Object.values(data);
        const fileName = Object.keys(data);
        setUrls(urls);
        setImageNames(fileName);
      });
  }, []);

  function downloadHandler() {
    const url = actualUrl;
    const name = actualUrl.replace('https://memegen.link/', ''); 
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        return response.blob();
      })
      .then(function (blob) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, name.toString());
        } else {
          let a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = name.toString();
          a.click();
        }
      });
  }

  // display drop down selection
  return (
    <div className="Generator">
      <label>Select image</label>
      <select className="image-options" onChange={onChangeSelect}>
        {urls.map(function mapUrls(url, i) {
          return (
            <option value={url.replace('/api/templates', '')}>
              "{imageNames[i]}"
            </option>
          );
        })}
      </select>

      {/* display form  */}

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

      <Form
        topLineText={topLineText}
        bottomLineText={bottomLineText}
        setTopLineText={setTopLineText}
        setBottomLineText={setBottomLineText}
      />
      <br />
      <br />
      <img src={actualUrl} alt="" />
      <br />

      <a href={actualUrl} target="_blank" rel="noopener noreferrer">
        <button style={openTabButtonStyle}>Open Image in New tab</button>
      </a>

      <DownloadButton dlURL={actualUrl} />
      <button onClick={downloadHandler}>Download</button>

      <br />
      <br />
    </div>
  );
};

export default MemeGenerator;
