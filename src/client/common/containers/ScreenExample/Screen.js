import React, { useState, useEffect } from 'react';

import Api from './../../../api/Api';
import * as S from './styles';

import { useToggle } from 'common/components/utils/hooks';
import Card from 'common/components/Card';
import Spinner from 'common/components/Spinner/Spinner';

const Screen = ({ children }) => {
  const [myParameter, setMyParameter] = useState(null);
  const [loading, toggleLoading] = useToggle(true);

  useEffect(() => {
    setTimeout(() => {
      loading && toggleLoading();
    }, 500);
  }, []);

  const handleTestClick = async () => {
    const {
      data: { testData }
    } = await Api.testGetMethod({ myParameter: 'test' });
    testData && setMyParameter(testData);
  };

  return (
    <S.Screen>
      <Card
        title={'Test Component: CARD'}
        onCTAClick={handleTestClick}
        description={
          myParameter
            ? myParameter
            : 'To check if the BFF works fine, click the button below...'
        }
        CTALabel={!myParameter && loading ? <Spinner /> : 'Click Here!'}
      />
    </S.Screen>
  );
};

export default Screen;
