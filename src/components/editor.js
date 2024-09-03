import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; 
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import "../App.css"


const Editor = ({ language, title, value, onChange, image }) => {


    console.log(`Rendering ${title} editor`);
    function handleChange(editor, data, value) {
      onChange(value);
    }
  
    return (
      <div className='editor-container'>
        <div className="editor-title">
          <i className={image}></i>
          {title}
           
        </div>
        
        <ControlledEditor
          value={value}
          onBeforeChange={handleChange}
          className="wrapper editor-height"
          options={{
            lineWrapping: true,
            mode: language,
            theme: "material",
            lineNumbers: true
          }}
          style={{ height: '100px' }}  // Set the desired height here
        />
      </div>
    );
  };
  
export default Editor;
