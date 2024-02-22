const throttle = function(cb, delay){
    let wait = false;

    return function(...args){
        if(wait) return;
        wait = true;
        cb(...args)
        setTimeout(() => {
            wait= false
        }, delay);
    }

}

const printName = (name) => console.log(name);

const thFun = throttle(printName, 1000)

thFun('name1')
thFun("name2");
thFun("name3");
thFun("name4");
thFun("name5");
