import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: red;
    padding: 2px;
    border-radius: 2px;
  }

  .checklist {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  input[type=checkbox]:before {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 0;
  left: 0;
  background-color: #fff;
}

  .completed {
    p {
  text-decoration:line-through;
   opacity: 0.6;
}
  }

  .completed input[type=checkbox]:before {
  background-color: #097530;
}

  input[type=checkbox] {
  position: relative;
  cursor: pointer;
}



input[type=checkbox]:checked:after {
  content: "";
  display: block;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 2px;
  left: 6px;
}

`