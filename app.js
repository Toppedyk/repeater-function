function repeaterCode(arr) {
  let out = ""
  for (let col = 0; col < arr[0].length; col++) {
    let seen = {}
    let highestCount =0
    let highestLetter = ""
    for (let row = 0; row < arr.length; row++) {
     let char = arr[row][col]
     seen[char] = seen[char] || 0
     seen[char]++
     if(seen[char] > highestCount){
       highestLetter = char
       highestCount = seen[char]
     }
    }
    out += highestLetter
  }
  return out
}