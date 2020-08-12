import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
   return (
      <article className="teacher-item">
         <header>
            <img src="https://avatars3.githubusercontent.com/u/13855043?s=460&u=86c7b9f55cf6c8f08e824f029e93fdbfaddfa335&v=4" alt="José Justino"/>
            <div>
               <strong>José Justino</strong>
               <span>Matemática</span>
            </div>
         </header>

         <p>
            Entusiasta das mais complicadas fórmulas matemáticas já estudadas.
            <br /><br />
            Apaixonado por matenática e já passou horas a fio estudando as mais aterrorizantes fórmulas da matemática avançada.
         </p>

         <footer>
            <p>
               Preço/hora
               <strong>R$ 80,00</strong>
            </p>
            <button type="button">
               <img src={whatsappIcon} alt="Whatsapp"/>
               Entrar em contato
            </button>
         </footer>
      </article>
   )
}

export default TeacherItem;