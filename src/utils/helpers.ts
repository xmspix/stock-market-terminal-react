export const numberFormater = (number: number) => {
  if (number >= 1000000) return (number / 1000000).toFixed(2) + "M";
  if (number >= 1000) return (number / 1000).toFixed(2) + "K";
  return number;
};

export const convertYMD = (date: number) => {
  return new Date(date * 1000).toISOString().split('T')[0]
}

export const widgetCount = (widgets: number) => {
  switch (widgets) {
    case 1:
    case 2:
      return 1;

    case 3:
    case 4:
      return 2;

    case 5:
    case 6:
      return 3;

    default:
      return widgets;
  }
}

// debounce function
export const debounce = (func: Function, wait: number, immediate: boolean = false) => {
  let timeout: any;
  return function (this: any) {
    let context = this, args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}