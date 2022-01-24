import styled from 'styled-components';
import Step from './Step';

const Wrapper = styled.div`
  margin-left: 10px;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  width: 100%;
  height: 25px;
  gap: 2px;
`;

const Steps = ({ steps }) => {
  const stepsArray = Array(steps).fill('');

  return (
    <Wrapper>
      {stepsArray.map((step, i) => (
        <Step key={i} />
      ))}
    </Wrapper>
  );
};

export default Steps;
