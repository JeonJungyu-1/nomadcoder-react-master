import styled from "styled-components";


function Test(props) {
    console.log(props.fo["a"]);
  return (
    <input type="text" value={props.fo["a"]} onChange={(e)=>{console.log(e.target.value)}} />
  );
}

export default Test;
