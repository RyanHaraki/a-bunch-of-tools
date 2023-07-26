const binaryExample = "1001";

// Take the binary integer, split it into an array, loop through array in reverse order and sum powers of 2
const signedBinaryToDecimal = (binaryString) => {
  let finalInt = 0;
  let exponent = 0;
  let binaryArray = binaryString.split("").map((number) => parseInt(number));

  // If the binary integer starts with a 1, do two's complement to convert it
  if (binaryArray[0] === 1) return twoComplement(binaryArray); // 1010

  binaryArray = binaryArray.reverse(); // reverse to operate as if going from left to right by hand

  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === 1) {
      finalInt = finalInt + 2 ** exponent; // sum all powers of 2 to get finalInt
    }

    exponent++;
  }

  return finalInt;
};

const twoComplement = (binaryArray) => {
  // 1010
  let finalInt = 0;
  let exponent = 0;
  let carry = 1; // initial carry as 1 since we are adding 1

  // flip the 0s and 1s (same as reversing TBH)
  const flippedBinary = binaryArray.map((num) => (num == 1 ? 0 : 1)); // 0101 -> +1 -> 0110

  binaryReversed = flippedBinary.reverse(); // reverse to operate as if going from left to right by hand / 1010

  // add 1 to binary string
  for (let i = 0; i < flippedBinary.length; i++) {
    if (carry === 1 && flippedBinary[i] === 0) {
      flippedBinary[i] = 1;
      carry = 0;
    }

    if (carry === 1 && flippedBinary[i] === 1) {
      flippedBinary[0] = 0;
      carry = 1;
    }
  }

  for (let i = 0; i < flippedBinary.length; i++) {
    if (flippedBinary[i] === 1) {
      finalInt = finalInt + 2 ** exponent * -1; // sum all powers of 2 to get finalInt
    }

    exponent++;
  }

  return finalInt;
};

console.log(signedBinaryToDecimal(binaryExample));
