import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;

  // span:first-child {
  //   width: 200px; /* Adjust this value as needed */
  // }

  // span:last-child {
  //   width: 150px; /* Adjust this value as needed */
  //   text-align: right;
  }
`;


export const DeleteButton = styled.button`
  width: 100px;
  color: #fff;
      background-color: #ff3cac;
    background-image: linear-gradient(225deg, #bfbfbf 0%, #ffb6c1 50%, #87cefa 100%);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #222;
    box-shadow: inset 0px 2px 4px rgba(255, 0, 33, 0.5),
      inset 0px 4px 8px rgba(255, 0, 33, 0.5),
      inset 0px 8px 16px rgba(255, 0, 33, 0.5);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;