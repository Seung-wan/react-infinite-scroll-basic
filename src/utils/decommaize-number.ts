export function decommaizeNumber(value: string) {
  const result = Number(value.replaceAll(/,/g, ''));

  if (isNaN(result)) {
    console.warn('올바른 숫자 값이 아닙니다.', result);
  }

  return result;
}
