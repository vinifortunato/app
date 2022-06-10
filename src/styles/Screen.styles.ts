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

const Styles = {
  Wrapper,
  Container,
  Box
};

export default Styles;

