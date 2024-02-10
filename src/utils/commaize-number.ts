import { decommaizeNumber } from './decommaize-number';

function commaizeByRegex(value: string) {
  return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function mergeByPoint(prePoint: string, postPoint?: string) {
  return [prePoint, postPoint].filter((v) => v != null).join('.');
}

export function commaizeNumber(value: number | string) {
  const stringified = String(value);
  const [prePoint, postPoint] = stringified.split('.');

  const removeCommaPrePoint = String(decommaizeNumber(prePoint));
  const mergedNumber = mergeByPoint(removeCommaPrePoint, postPoint);

  if (isNaN(Number(mergedNumber))) {
    console.warn(
      `인자가 숫자 형태가 아닙니다. 입력한 값을 확인하세요.\n입력한 값: ${value}`
    );
    return '';
  }

  return mergeByPoint(commaizeByRegex(removeCommaPrePoint), postPoint);
}
