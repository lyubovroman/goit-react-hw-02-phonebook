import styled from '@emotion/styled';

export const Form = styled.form`
  border-radius: 10px;
  border: solid 2px #000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: auto;
  padding: 50px;
  background: linear-gradient(135deg, #fff 50%, #f1f1f1 50%);
`;


export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  text-shadow: 2px 2px 3px rgba(0,0,0,0.3);
`;

export const Label = styled.label`
font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
padding: 12px;
  border-radius: 6px;
  border: 3px solid #ccc;
  font-size: 16px;
  width: 100%;
  margin-bottom: 16px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    margin-top:10px;

`;



export const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
 
  color: #f9fcff;
  margin-top: 12px;
  padding: 12px 40px;
  border-radius: 10px;
  border: none;
  transition: filter 0.3s ease-in-out;
background-color: #ff3cac;
background-image: linear-gradient(225deg, #bfbfbf 0%, #ffb6c1 50%, #87cefa 100%);
:hover {
 color: #fff;
    background-color: #222;
    box-shadow: inset 0px 2px 4px rgba(255, 0, 33, 0.5),
      inset 0px 4px 8px rgba(255, 0, 33, 0.5),
      inset 0px 8px 16px rgba(255, 0, 33, 0.5);
    transition: 0.2s;
    transform: translateY(2px);
}
  }
`;