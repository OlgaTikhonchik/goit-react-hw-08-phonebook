import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  padding: 15px 20px;
  border: 3px solid #a4a086;
  border-radius: 10px;
  box-shadow: 0px 0px 13px -1px rgba(43, 43, 59, 0.59);
`;

export const Input = styled(Field)`
    font: inherit;
    max-width: 320px;
    color: #653463;
    background-color: #a7a073;
    border: 2px solid #653463;
    border-radius: 10px;
    margin: 20px auto 20px;
    padding: 8px;
    outline: none;
    font-size: 24px;
    display: block;
    box-shadow: 0px 0px 13px -1px rgba(43, 43, 59, 0.59);
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

export const Button = styled.button`
  width: 200px;
  heigth: 50px;
  padding: 10px;
  border: 2px solid #653463;
  border-radius: 10px;
  margin: 0 auto;
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

export const Error = styled(ErrorMessage)`
  width: 250px;
  text-align: center;
  margin: 0 auto 10px;
  color: red;
  font-size: 18px;
`;

// export const Form = styled.form`
//   padding: 15px 20px;
//   border: 3px solid #a4a086;
//   border-radius: 10px;
//   box-shadow: 0px 0px 13px -1px rgba(43, 43, 59, 0.59);
// `;

// export const Input = styled.input`
//     font: inherit;
//     max-width: 320px;
//     color: #653463;
//     background-color: #a7a073;
//     border: 2px solid #653463;
//     border-radius: 10px;
//     margin: 20px auto 20px;
//     padding: 8px;
//     outline: none;
//     font-size: 24px;
//     display: block;
//     box-shadow: 0px 0px 13px -1px rgba(43, 43, 59, 0.59);
// }`;

// export const Label = styled.label`
//   font-size: 24px;
//   font-weight: 700;
//   align-items: center;
//   justify-content: center;
//   display: flex;
//   color: #653463;

//   :hover {
//     color: #865684;
//   }
// `;

// export const Button = styled.button`
//   width: 200px;
//   heigth: 50px;
//   padding: 10px;
//   border: 2px solid #653463;
//   border-radius: 10px;
//   margin: 0 auto;
//   font-size: 20px;
//   font-weight: 700;
//   text-align: center;
//   justify-content: center;
//   background-color: #7e7955;
//   display: flex;
//   color: #653463;
//   box-shadow: 0px 0px 13px -1px rgba(43, 43, 59, 0.59);

//   :hover {
//     color: #865684;
//     background-color: #a7a073;
//   }
// `;
