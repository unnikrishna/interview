const flattenArray = (arr) => {

  return arr.reduce((acc, current)=>{
    const isArray = Array.isArray(current);
    return acc.concat(isArray? flattenArray(current): current)
  }
    ,[])
}
