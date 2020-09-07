import styled from "styled-components";

export const Container = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: column;
`;

export const DivImg = styled.div`
  padding-top: 3%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 5px;
  border: 2px solid;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 5px;
`;

export const TopText = styled.h2`
  position: absolute;
  top: 25px;
  color: white;
  text-shadow: 2px 2px black;
  font-size: 2em;
`;

export const BottomText = styled.h2`
  position: absolute;
  bottom: 8px;
  color: white;
  text-shadow: 2px 2px black;
  font-size: 2em;
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form``;

export const MemeImg = styled.img`
  height: auto;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const GenerateButtom = styled.button`
  margin-left: 10px;
  border: 1px solid;
  border-radius: 6px;
  font-size: 20px;
  padding-bottom: 5px;
  color: gray;
  background-color: white;
  cursor: pointer;
`;
