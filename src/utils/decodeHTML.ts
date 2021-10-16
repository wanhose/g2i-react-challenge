const decodeHTML = (value: string) => {
  const element = document.createElement('textarea');
  element.innerHTML = value;

  return element.value;
};

export default decodeHTML;
