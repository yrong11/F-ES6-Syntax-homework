const parseData = (input) => {
  const {data, column} = input
  const result = []
  for(let info of data){
    let tmp = {}
    column.forEach((value, index) => {
      tmp[value.name] = info[index]
    })
    result.push(tmp)

  }
  return result
}
export { parseData };
