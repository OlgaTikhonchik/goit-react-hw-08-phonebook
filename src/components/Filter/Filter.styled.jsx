import styled from '@emotion/styled';

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Input = styled.input`
    font: inherit;
    max-width: 320px;
    color: #653463;
    background-color: #a7a073;
    border: 2px solid #653463;
    border-radius: 10px;
    padding: 8px;
    outline: none;
    font-size: 24px;
    display: block;
    box-shadow: 0px 0px 13px -1px rgba(43, 43, 59, 0.59);
    margin-right: 0;
    
}`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #653463;

  :hover {
    color: #865684;
  }
`;
