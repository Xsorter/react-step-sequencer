import styled from 'styled-components';
import { useState } from 'react';

const StepElement = styled.input`
  background: green;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  &:nth-child(8n + 5),
  &:nth-child(8n + 6),
  &:nth-child(8n + 7),
  &:nth-child(8n + 8) {
    opacity: 0.6;
  }
  &:checked {
    background: yellow;
  }
`;

const Step = () => {
  const [isChecked, setIsChecked] = useState(false);

  const changeHandler = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <StepElement
        type='checkbox'
        name={`step`}
        onChange={changeHandler}
        checked={isChecked}
      />
    </>
  );
};

export default Step;
