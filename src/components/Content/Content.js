import styled from 'styled-components';
import Transport from '../Transport/Transport';

const Wrapper = styled.div`
  background: #c4c4c4;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Content = () => {
  return (
    <Wrapper>
      <Transport />
    </Wrapper>
  );
};

export default Content;
