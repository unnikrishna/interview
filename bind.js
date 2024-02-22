Function.prototype.myBind = function(...args){
  const func = this;
  const context = args[0]
  const otherArg = args.slice(1)
  return function(...param){
    func.apply(context, [...otherArg,...param])
  }
}

myFunction.bind(obj)
