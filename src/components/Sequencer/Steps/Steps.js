import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 10px;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  width: 100%;
  height: 25px;
  gap: 2px;
`;

const Step = styled.div`
  background: green;
`;

const Steps = () => {
  return (
    <Wrapper>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
      <Step></Step>
    </Wrapper>
  );
};

export default Steps;
