import styled from "styled-components";

export const Container = styled.div`
max-width: 600px;
margin: 0 auto;
padding: 1rem;
display: flex;
justify-content: center;

`

export const TodoInput = styled.form`
  width: 100%;
  display: flex;
  

  input {
    width: 100%;
    border:  none;
    border: 1px solid #ddd;
    background: transparent;
    border-radius: 0.2rem;
    font-size: 1rem;
    padding:0 1rem;


    &:focus {
      background: rgba(62, 138, 23,.05);
      outline: 1px solid #629e21;
      border: none;

    }
  }

  .add-icon {
    font-size: 2rem;
    padding: 0 0 0 1rem;
    background: transparent;
    border: none;
    color: #29f270;
  
  }
`