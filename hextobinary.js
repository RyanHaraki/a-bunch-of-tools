const hexToBinaryMap = {
  0: "0000",
  1: "0001",
  2: "0010",
  3: "0011",
  4: "0100",
  5: "0101",
  6: "0110",
  7: "0111",
  8: "1000",
  9: "1001",
  A: "1010",
  B: "1011",
  C: "1100",
  D: "1101",
  E: "1110",
  F: "1111",
};

// Take the hex value, split the 0x, add the binary values of each hex digit to a string
const hexToBinary = (hexValue) => {
  let binaryString = "";
  let stringToProcess = hexValue.split("0x")[1].split("");

  if (hexValue.split("0x")[0] !== "") {
    return "ERROR: Invalid Hexadecimal format. Please use the format 0x{0-F}+ to denote hexadecimal numbers.";
  }

  for (let i = 0; i < stringToProcess.length; i++) {
    binaryString = binaryString + hexToBinaryMap[stringToProcess[i]];
  }

  return binaryString;
};

console.log(hexToBinary("0x0"));
