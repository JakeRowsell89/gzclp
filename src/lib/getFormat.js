const formats = {
  1: {
    1: "5x3+",
    2: "6x2+",
    3: "10x1+"
  },
  2: {
    1: "3x10",
    2: "3x8",
    3: "3x6"
  },
  3: {
    1: "3x15+",
    2: "3x15+",
    3: "3x15+"
  }
}

module.exports = function (tier, stage) {
  return formats[tier][stage]
}