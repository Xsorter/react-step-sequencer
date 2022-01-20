import styled from 'styled-components';
import SvgIcon from '../../UI/SvgIcon/SvgIcon';

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  height: 24px;
  width: 28px;
  cursor: pointer;
  transition: opacity ease-out 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

const buttons = ['play', 'pause', 'stop'];

const clickHandler = (e) => {};

const Buttons = () => {
  return (
    <Wrapper>
      {buttons.map((name, i) => (
        <Button onClick={clickHandler} type='button' key={i}>
          <SvgIcon iconId={`${name}-button`} />
        </Button>
      ))}
    </Wrapper>
  );
};

export default Buttons;
