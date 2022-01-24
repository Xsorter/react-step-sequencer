import styled from 'styled-components';
import Buttons from './Buttons/Buttons';
import BPM from './BPM/BPM';

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Transport = () => {
  return (
    <Wrapper>
      <BPM />
      <Buttons />
    </Wrapper>
  );
};

export default Transport;
