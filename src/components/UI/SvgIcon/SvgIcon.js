import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const SvgIcon = ({ iconId }) => {
  return (
    <SVG className={iconId}>
      <use
        xlinkHref={`${process.env.PUBLIC_URL}/images/icons/icons-sprite.svg#${iconId}`}
      />
    </SVG>
  );
};

export default SvgIcon;
