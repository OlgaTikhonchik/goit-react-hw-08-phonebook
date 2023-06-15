import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  // justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #653463;
  margin: 0;
  margin-right: 20px;

  :hover {
    color: #865684;
  }
`;

export const Btn = styled.button`
  width: 150px;
  heigth: 50px;
  padding: 10px;
  border: 2px solid #653463;
  border-radius: 10px;
  // margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  background-color: #7e7955;
  display: flex;
  color: #653463;
  box-shadow: 0px 0px 13px -1px rgba(43, 43, 59, 0.59);

  :hover {
    color: #865684;
    background-color: #a7a073;
  }
`;
