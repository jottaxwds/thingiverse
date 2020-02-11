import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Card = ({ title, description, onCTAClick, CTALabel }) => {
  return (
    <S.Card>
      <S.CardBody>
        <S.CardTitle data-testid="card-title">{title}</S.CardTitle>
        <S.CardThumb data-testid="card-image" />
        <S.CardDescription data-testid="card-desc">
          {description}
        </S.CardDescription>
        <S.CardMore data-testid="card-open" onClick={onCTAClick}>
          {CTALabel}
        </S.CardMore>
      </S.CardBody>
    </S.Card>
  );
};

Card.defaultProps = {
  title: '',
  onCTAClick: () => {},
  description: '',
  CTALabel: ''
};

Card.propTypes = {
  title: PropTypes.string,
  onCTAClick: PropTypes.func,
  description: PropTypes.string,
  CTALabel: PropTypes.string
};

export default Card;
