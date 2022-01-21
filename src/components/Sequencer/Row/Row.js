import styled from 'styled-components';
import Controls from '../Controls/Controls';
import Steps from '../Steps/Steps';

const Wrapper = styled.div`
  background: red;
  display: flex;
  margin-top: 10px;
`;

const Row = () => {
  return (
    <Wrapper>
      <Controls />
      <Steps />
    </Wrapper>
  );
};

export default Row;
