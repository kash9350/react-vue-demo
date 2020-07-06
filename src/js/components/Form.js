import React, { useState, useEffect } from "react";
import ReactVueWrapper from './ReactVueWrapper';
import App from "./App";
import AppComponent from './AppComponent.vue'

const Form = () => {
  const [visible, setVisible] = useState(false);
  return (
      <div>
        <div className="App">
          <h1 onClick={(e)=>{
            setVisible(!visible);
          }}>
            hello world
          </h1>
          <ReactVueWrapper vueComponent={AppComponent}/>
        </div>
        <App />
      </div>
    );
}

export default Form