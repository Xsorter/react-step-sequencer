import styled from 'styled-components';
import Row from '../Row/Row';

const Wrapper = styled.div`
  border-radius: 7px;
  background: #4caf50;
  ${({ type }) => type === 'sampler' && `background: #7cb342;`};
  margin-bottom: 10px;
  padding: 10px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: #000;
  font-size: 18px;
  margin-bottom: 10px;
`;

const RowGroup = ({ title, type }) => {
  return (
    <Wrapper type={type}>
      <Title>{title}</Title>
      <Row />
      <Row />
    </Wrapper>
  );
};

export default RowGroup;
