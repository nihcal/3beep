import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

import Menu from './components/Menu'
function App() {
  return (<Fragment>  
    <Menu></Menu>
    
    <div class="chat">
      <h2>Чаты</h2>
      <div class="chat-up">
        <div class="vhod">
          <p >Входящие 12 </p>
          <img  src="img/chat/ico (1).svg" alt=""/>
        </div>
        <p class="pun">Мои диалоги</p>
        <img class="pun" src="img/chat/ico.svg" alt=""/>
      </div>
      <div class="chat-menu">
        <a href="">Каналы <img src="img/chat/off_outline_close.svg" alt=""/></a>
        <a class="search" href="">Поиск...</a>
      </div>
      <div class="chat-message">
        <img src="img/chat/chat-body/social.svg" alt=""/>
        <div class="chat-body"> 
          <p>Amir Turanov</p>
          <p>Добрый день, подскажите как...</p>
        </div>  
        <div class="clock">
          <img class="clock2" src="img/chat/ico (1).svg" alt=""/>
          <div class="clock1">
            <img src="img/chat/chat-body/Untitled-1 2.svg" alt=""/>
            <p>6:38</p>
          </div>
        </div>
      </div>
      <div class="chat-message2">
        <img src="img/chat/chat-body/social.svg" alt=""/>
        <div class="chat-body"> 
          <p>Amir Turanov</p>
          <p>Добрый день, подскажите как...</p>
        </div>  
        <div class="clock">
          <img class="clock2" src="img/chat/ico (1).svg" alt=""/>
          <div class="clock1">
            <img src="img/chat/chat-body/Untitled-1 2.svg" alt=""/>
            <p>6:38</p>
          </div>
        </div>
      </div>
      <div class="chat-message2">
        <img src="img/chat/chat-body/social (1).svg" alt=""/>
        <div class="chat-body"> 
          <p>Amir Turanov</p>
          <p>Добрый день, подскажите как...</p>
        </div>  
        <div class="clock">
          <img class="clock2" src="img/chat/ico (1).svg" alt=""/>
          <div class="clock1">
            <img src="img/chat/chat-body/Untitled-1 2.svg" alt=""/>
            <p>6:38</p>
          </div>
        </div>
      </div>
      <div class="chat-message2">
        <img src="img/chat/chat-body/social (2).svg" alt=""/>
        <div class="chat-body"> 
          <p>Amir Turanov</p>
          <p>Добрый день, подскажите как...</p>
        </div>  
        <div class="clock">
          <div class="clock1">
            <img src="img/chat/chat-body/Untitled-1 2.svg" alt=""/>
            <p>6:38</p>
          </div>
        </div>
      </div>
      <div class="chat-message2">
        <img src="img/chat/chat-body/social.svg" alt=""/>
        <div class="chat-body"> 
          <p>Amir Turanov</p>
          <p>Добрый день, подскажите как...</p>
        </div>  
        <div class="clock">
          <div class="clock1">
            <img src="img/chat/chat-body/Untitled-1 2.svg" alt=""/>
            <p>6:38</p>
          </div>
        </div>
      </div>
      <div class="chat-message2">
        <img src="img/chat/chat-body/social.svg" alt=""/>
        <div class="chat-body"> 
          <p>Amir Turanov</p>
          <p>Добрый день, подскажите как...</p>
        </div>  
        <div class="clock">
          <div class="clock1">
            <img src="img/chat/chat-body/Untitled-1 2.svg" alt=""/>
            <p>6:38</p>
          </div>
        </div>
      </div>
      <div class="chat-message2">
        <img src="img/chat/chat-body/social (3).svg" alt=""/>
        <div class="chat-body"> 
          <p>Amir Turanov</p>
          <p>Добрый день, подскажите как...</p>
        </div>  
        <div class="clock">
          <div class="clock1">
            <img src="img/chat/chat-body/Untitled-1 2.svg" alt=""/>
            <p>6:38</p>
          </div>
        </div>
      </div>
      <div class="chat-message2">
        
        <img src="img/chat/chat-body/Group 941.svg" alt=""/>
        <div class="chat-body"> 
          <p>Amir Turanov</p>
          <p>Добрый день, подскажите как...</p>
        </div>  
        <div class="clock">
          <div class="clock1">
            <img src="img/chat/chat-body/Untitled-1 2.svg" alt=""/>
            <p>6:38</p>
          </div>
        </div>
      </div>
      


    </div>
    <main class="section"></main></Fragment>
  
  );
}

export default App;
