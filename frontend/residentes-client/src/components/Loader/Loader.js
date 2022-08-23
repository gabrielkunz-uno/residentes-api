import React from 'react';

function ShowDetail(props) {
  return (
    <span className="fundo"style={{display: `${props.display.display}`}}>
    <div className={`loader-${props.display.tamanho}`}></div>
    </span>
  );
}

export default ShowDetail;
