const debounce = function(cb, delay){
    let timer;
    return function(...args){
        // if(timer) return;
        clearTimeout(timer)
        const context = this;
        timer = setTimeout(() => {
          cb.apply(context, args);
        }, delay);
    }
}

const printName = (name) => console.log(name);

const dbFun = debounce(printName, 5000)

dbFun('UNNI')
dbFun('w')
dbFun('r')
dbFun('t')
dbFun('Kavya')
