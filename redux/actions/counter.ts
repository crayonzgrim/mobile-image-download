export const PLUS_COUNT = 'PLUS_COUNT';
export const MINUS_COUNT = 'MINUS_COUNT';

const plusCount = () => {
  return {
    type: PLUS_COUNT
  };
};

const minusCount = () => {
  return {
    type: MINUS_COUNT
  };
};

export { minusCount, plusCount };
