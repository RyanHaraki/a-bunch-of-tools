const binaryExample = "0111";

// Take the binary integer, split it into an array, loop through array in reverse order and sum powers of 2
const unsignedBinaryToDecimal = (binaryString) => {
  let finalInt = 0;
  let exponent = 0;
  const binaryArray = binaryString
    .split("")
    .map((number) => parseInt(number))
    .reverse();

  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === 1) {
      finalInt = finalInt + 2 ** exponent;
    }

    exponent++;
  }

  return finalInt;
};

console.log(unsignedBinaryToDecimal(binaryExample));
