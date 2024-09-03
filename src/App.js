import React from 'react'
import Editor from './components/editor'
import Navbar from './components/navbar'
import { useState, useEffect } from 'react';
import "./App.css";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJavascript] = useState("");
  const [Doc, setDoc] = useState("");
  useEffect(()=>{
    setDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</body>
      <script>${js}</script>
      </html>
      `);
  },[html,css,js]
  );
  return (
    <div className='contain'>
      <Navbar />
      <div className='toppanel'>
      <Editor title="HTML" language="xml" value={html} onChange={setHtml} id="html-editor" image="fa-brands fa-html5"/>
      <Editor title="CSS" language="css" value={css} onChange={setCss} id="css-editor" image="fa-brands fa-css3-alt"/>
      <Editor title="JavaScript" language="javascript" value={js} onChange={setJavascript} id="js-editor" image="fa-brands fa-js"/>
      

      </div>
      <div className='bottom-panel'>
        <iframe srcDoc={Doc} sandbox='allow-scripts' title='output' width="100%" height="100%"></iframe>
       </div>
       <div className='details'>
          <span>Developed by <a href='https://www.linkedin.com/in/uvarajan-dev/' target='_blank' rel="noreferrer">D.UVARAJAN</a></span>
        </div>
    </div>
  )
}

export default App
