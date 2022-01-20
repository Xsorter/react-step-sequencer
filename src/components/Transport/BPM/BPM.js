import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div``;

const Title = styled.p`
  font-size: 16px;
`;

const Value = styled.input`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  outline: none;
  max-width: 40px;
  text-align: center;
  font-size: 14px;
`;

const BPM = () => {
  const [BPMValue, setBPMValue] = useState(120);

  const changeHandler = (e) => {
    setBPMValue(e.target.value);
  };

  return (
    <>
      <Title>BPM:</Title>
      <Value
        maxLength={3}
        type={'text'}
        onChange={changeHandler}
        value={BPMValue}
      />
    </>
  );
};

export default BPM;
