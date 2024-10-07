function roll(n, s) {
  if (n === "") {
    n = 1
  }
  let res = ""
  let sum = 0
  for (let i = 0; i < n; i++) {
    let r = Math.floor(Math.random() * s + 1)
    sum += r
    res += r + ", "
  }
  return [res, sum]
}

function rollAll(d) {
  const i = d.replaceAll(" ", "").split("+")
  let res = ""
  let sum = 0
  i.forEach((is) => {
    let n = is
    let r = roll(n[0], n[1])
    res += r[0]
    sum += r[1]
  })
  return `[${res.slice(0, -2)}] = ${sum}`
}

console.log(rollAll("2d8+1d12"))
console.log(rollAll("d6"))
