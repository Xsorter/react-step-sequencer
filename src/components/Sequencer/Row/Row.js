import styled from 'styled-components';
import Controls from '../Controls/Controls';
import Steps from '../Steps/Steps';

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Row = ({ steps, name }) => {
  return (
    <Wrapper>
      <Controls name={name} />
      <Steps steps={steps} />
    </Wrapper>
  );
};

export default Row;
