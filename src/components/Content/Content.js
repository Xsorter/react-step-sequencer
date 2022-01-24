import styled from 'styled-components';
import Transport from '../Transport/Transport';
import Sequencer from '../Sequencer/Sequencer';

const Wrapper = styled.div`
  background: #a1a1a1;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Content = () => {
  return (
    <Wrapper>
      <Transport />
      <Sequencer />
    </Wrapper>
  );
};

export default Content;
