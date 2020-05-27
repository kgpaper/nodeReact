import React, { useState } from "react";
import { Input, Button, Modal } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const { confirm } = Modal;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #468fe1;
`;

const Title = styled.div`
  margin-bottom: 40px;
  font-size: 3rem;
  color: white;
  font-family: "Lobster", cursive;
  text-shadow: 1px 1px 4px gray;
`;

const RowSpan = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  margin-bottom: 200px;
`;

const ConvertButton = styled(Button)`
  height: 100%;
  background: #f7a62d;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 1px 1px 4px gray;
`;

const CustomInput = styled(Input)`
  width: 600px;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px gray;
`;

function showConfirm() {
  confirm({
    title: "변경된 URL",
    content: "기존의 url: , \n 변경된 url : ",
    onOk() {},
    onCancel() {},
  });
}

function App() {
  return (
    <Container>
      <Title>DSC</Title>
      <RowSpan>
        <CustomInput size={"large"} />
        <ConvertButton onClick={showConfirm}>Convert</ConvertButton>
      </RowSpan>
    </Container>
  );
}
export default App;