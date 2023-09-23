const findBlocks = (str: string) => {
  let blocks = []
  let currentBlock = ''
  for (let i = 0; i <= str.length; i++) {
    if (!currentBlock) {
      currentBlock += str[i]
      continue
    }
    console.log({currentBlock, char: str[i], if: currentBlock.endsWith(str[i])})
    if (currentBlock.endsWith(str[i])) {
      currentBlock += str[i]
    } else {
      blocks.push(currentBlock)
      currentBlock = str[i]
    }
  }

  console.log(blocks)
}

class Solution {
  public solution(str: string): number {
    return 0
  }
}

