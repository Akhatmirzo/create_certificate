function editText(text, maxLength) {
  const arrText = text.split(" ");
  const newTexts = {
    firstText: [],
    secondText: [],
  };

  let currentLength = maxLength;
  for (let i = 0; i < arrText.length; i++) {
    const text = arrText[i];

    if (currentLength >= text.length) {
      currentLength -= text.length;
      newTexts.firstText.push(text);
    } else {
      newTexts.secondText.push(text);
    }
  }

  newTexts.firstText = newTexts.firstText.join(" ");
  newTexts.secondText = newTexts.secondText.join(" ");

  return newTexts;
}

export default editText;
