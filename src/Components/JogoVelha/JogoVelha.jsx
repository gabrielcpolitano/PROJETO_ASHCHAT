import React, { useState, useRef } from 'react';
import './JogoVelha.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

function JogoVelha() {
  let [contar, setContar] = useState(0);
  let [prender, setPrender] = useState(false);
  let referencia = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const escolha = (e, numero) => {
    if(prender) {
      return 0
    }
    if(contar%2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[numero] = "x";
      setContar(++contar);
    }
    else{
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[numero] = "o";
      setContar(++contar);
    }
    checarVencedor(ganho);
  }

  const checarVencedor = () => {

    if(data[0] === data[1] && data[1] === data[2] && data[2] !== '')
    {
      ganho(data[2]);
    }

    else if(data[3] === data[4] && data[4] === data[5] && data[5] !== '')
    {
      ganho(data[5]);
    }

    else if(data[6] === data[7] && data[7] === data[8] && data[8] !== '')
    {
      ganho(data[8]);
    }

    else if(data[0] === data[3] && data[3] === data[6] && data[6] !== '')
    {
      ganho(data[6]);
    }

    else if(data[1] === data[4] && data[4] === data[7] && data[7] !== '')
    {
      ganho(data[7]);
    }

    else if(data[2] === data[5] && data[5] === data[8] && data[8] !== '')
    {
      ganho(data[8]);
    }

    else if(data[0] === data[4] && data[4] === data[8] && data[8] !== '')
    {
      ganho(data[8]);
    }

    else if(data[0] === data[1] && data[1] === data[2] && data[2] !== '')
    {
      ganho(data[2]);
    }

    else if(data[2] === data[4] && data[4] === data[6] && data[6] !== '')
    {
      ganho(data[6]);
    }

  }

  const ganho = (ganhador) => {
    setPrender(true);
    if(ganhador === "x")
    {
      referencia.current.innerHTML = `<img src=${cross_icon}>ganhou!!`
    }
    else
    {
      referencia.current.innerHTML = `<img src=${circle_icon}>ganhou!!`
    }
  }


  const reset = () => {
    setPrender(false);
    data = ["", "", "", "", "", "", "", "", ""];
    referencia.current.innerHTML = `Jogo da Velha`;
    box_array.forEach((e) => {
      e.current.innerHTML = "";
    })
  }



  return (
    <div className='conteiner'>
      <h1 className="title" ref={referencia}>Jogo da Velha</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e)=>{escolha(e,0)}}></div>
          <div className="boxes" ref={box2} onClick={(e)=>{escolha(e,1)}}></div>
          <div className="boxes" ref={box3} onClick={(e)=>{escolha(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e)=>{escolha(e,3)}}></div>
          <div className="boxes" ref={box5} onClick={(e)=>{escolha(e,4)}}></div>
          <div className="boxes" ref={box6} onClick={(e)=>{escolha(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e)=>{escolha(e,6)}}></div>
          <div className="boxes" ref={box8} onClick={(e)=>{escolha(e,7)}}></div>
          <div className="boxes" ref={box9} onClick={(e)=>{escolha(e,8)}}></div>
        </div>
      </div>
      <button className="button-85"onClick={()=>{reset()}}>Recomeçar</button>
    </div>
  );
}

export default JogoVelha;