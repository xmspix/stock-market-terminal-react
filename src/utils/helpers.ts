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