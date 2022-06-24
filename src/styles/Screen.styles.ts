import styled from 'styled-components/native';

const Wrapper = styled.View`
  display: flex;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 5px auto 0px auto;
  max-width: 1200px;
  width: 100%;
`;

const Box = styled.View`
  background-color: white;
  margin: 5px 10px;
  padding: 10px;
  border-radius: 3px;
`;

const ModalWrapper = styled.View`
  margin: 0px 10px 0px 10px;
`;

const ModalCloseTab = styled.Pressable`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 5px;
  background-color: lightgray;
  border-radius: 5px;
  width: 25%;
  margin: 20px auto 20px auto;
`;

const Styles = {
  Box,
  Container,
  ModalCloseTab,
  ModalWrapper,
  Wrapper,
};

export default Styles;

