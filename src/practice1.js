// TODO 可以思考一下可否用reduce来做
const parseData = (input) => {
  // TODO 解构可以优化到函数接受参数中
  const {data, column} = input
  // TODO 使用map做数组与数组的转化，不用声明新数组
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
