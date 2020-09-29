import React from 'react';
import axios from 'axios';

export default function DownloadButton(props) {
  function download() {
    axios({
      url: props.memeURL,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'image.jpg');
      document.body.appendChild(link);
      link.click();
    });
  }
  const downloadButtonStyle = {
    fontSize: '20px',
    fontColor: 'black',
    borderRadius: '8px',
    backgroundColor: 'rgb(134, 166, 175)',
    padding: '.5em',
  };

  return (
    <div>
      <button style={downloadButtonStyle} onClick={download}>
        Download
      </button>
    </div>
  );
}
