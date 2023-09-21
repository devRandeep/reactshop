import React from 'react';
import { ReactDOM } from 'react';

export default function Props(props) {
    function Welcome(porps){
        return <h1>hi {props.name}</h1>
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Props />);
  return (
    <>
    <Welcome name="sara"/>
    <Welcome name="Amit"/>
    <Welcome name="Rajat"/>
      </>
  );
}
