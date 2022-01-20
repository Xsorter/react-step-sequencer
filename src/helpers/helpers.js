import zipCodesUSMock from 'src/mocks/zipCodesUSMock';

export const ascendingArray = (start, end) => {
  return Array.from({ length: end - start }, (x, i) => i + start);
};

export const checkDefaultValues = (currentValue, defaultValue, condition) => {
  if (defaultValue === '' || defaultValue === false) return true;
  switch (condition) {
    case 'equal':
      return currentValue === defaultValue;
    case 'range':
      return isInRange(defaultValue, currentValue[0], currentValue[1]);
    case 'array':
      return isInArray(defaultValue, currentValue);
  }
};

export const isInRange = (number, minVal, maxVal) => {
  return number >= minVal && number <= maxVal;
};

export const isInArray = (value, array) => {
  return array.find((el) => el === value);
};

export const groupBy = (xs, key) => {
  return xs.reduce(
    (entryMap, e) => entryMap.set(e[key], [...(entryMap.get(e[key]) || []), e]),
    new Map(),
  );
};

export const calculateAge = (year) => {
  const today = new Date();
  return today.getFullYear() - Number(year);
};

export const openBackgroundTab = (e) => {
  e.preventDefault();
  window.open('/quiz', '_blank');
  window.open('/brands', '_self');
};

export const openCurrentTab = (e) => {
  e.preventDefault();
  window.open('/quiz', '_self');
};

export const loadStorageState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStorageState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {}
};

export const zipCodeUSValidation = (value) => {
  const zipCode = parseInt(value);
  return zipCodesUSMock.reduce((acc, i) => {
    const startVal = parseInt(i[0]);
    const endVal = parseInt(i[1]);
    if (zipCode >= startVal && zipCode <= endVal) return true;
    return acc;
  }, false);
};
