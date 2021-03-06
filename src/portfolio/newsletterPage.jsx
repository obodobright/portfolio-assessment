import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Container id="newsletter">
      <Wrapper>
        <Title>Subscribe to our Newsletter</Title>
        <Form>
          <Input type="text" placeholder="Enter your email address" />
          <Submit>Submit</Submit>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Newsletter;
const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
  color: #00008b;
`;
const Form = styled.div`
  width: 400px;
  height: 40px;
  background: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  color: inherit;
  :hover {
    border: 1px solid lightblue;
  }
`;
const Input = styled.input`
  width: 300px;
  height: 35px;
  padding: 8px 8px;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #00008b;
`;
const Submit = styled.button`
  flex: 1;
  ouline: none;
  border: 0;
  border-radius: 15px;
  background: white;
  color: #00008b;
`;
const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 30vh;
  background: linear-gradient(180deg, white, powderblue);
  display: flex;
  justify-content: center;
  align-items: center;
`;
