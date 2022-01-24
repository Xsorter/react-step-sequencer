import styled from 'styled-components';
import RowGroup from './RowGroup/RowGroup';
import { samplerData, synthData } from './synthsData';

const Outer = styled.div`
  padding: 0 10px 10px;
`;

const Wrapper = styled.div`
  background: #424242;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1),
    inset 0 -0.5px 0 rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  min-height: calc(100vh - 54px);
`;

const Sequencer = () => {
  return (
    <Outer>
      <Wrapper>
        <RowGroup synthData={samplerData} title='Sampler' type='sampler'>
          XXXXXXX
        </RowGroup>
        <RowGroup synthData={synthData} title='Synths' type='synths'>
          ZZZZZZZ
        </RowGroup>
      </Wrapper>
    </Outer>
  );
};

export default Sequencer;
