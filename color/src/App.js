import React, { useState } from 'react';
import styled from 'styled-components';
import './css/main.css';

function App() {

  const [form, setForm] = useState({
    name: '',
    convert: '',
  })

  const getRgb = (hex) =>{
    let check = true
    let rgb = hex.slice(1).match(/.{1,2}/g).map(item => {
      if (isNaN(parseInt(item, 16))) {
        check = false
      }
       return parseInt(item, 16)
    })
    if (check) {
      return 'rgb(' + rgb.join(', ') +')' 
    } else {
      return 'Ошибка'
    }
  }

  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${form.convert === 'Ошибка' ? 'red' : form.convert};
  `;

  const changeColor = evt => {
    let name = evt.target.value
    setForm(prevForm => ({...prevForm, name: name}))
    if (evt.target.value && evt.target.value.length >= 7) {
      let convert = ''
      if (evt.target.value && evt.target.value.length === 7) {
        convert = getRgb(name)
      } else if (evt.target.value.length > 7) {
        convert = 'Ошибка'
      }
      setForm(prevForm => ({...prevForm, convert: convert}))
    }
    
    
  }

  return (
    <div className="App">
      <Container>
        <input name="name" type="text" value={form.name} onChange={changeColor} placeholder="Введите hex"/>
        <input name="convert" type="text" value={form.convert} disabled/>
      </Container>
    </div>
  );
}

export default App;
