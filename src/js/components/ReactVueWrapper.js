import React from "react";
import { VueWrapper } from 'vuera';

const ReactVueWrapper = (props)=>{
    return(
        <VueWrapper component={props.vueComponent} message="HELLO Message"/>
    )
}

export default ReactVueWrapper;