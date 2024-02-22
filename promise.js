class CustomPromise{
  state = 'PENDING'
  value;
  thenCallbacks = [];
  errorCallbacks = [];
  
  constructor(action){
    action(this.resolve.bind(this), this.reject.bind(this))
  }
  
  resolve(value) {
    this.state = 'RESOLVED'
    this.value = value;
    this.thenCallbacks.forEach(cb=>cb(this.value))
  }
  reject(value) {
    this.state = 'REJECT'
    this.value = value;
    this.errorCallbacks.forEach(cb=>cb(this.value))
  }
  then(cb){
    this.thenCallbacks.push(cb)
    return this;
  }
  catch(cb){
    this.errorCallbacks.push(cb)
    return this;
  }
}

// CREATE A PROMISE

const promise = new CustomPromise((resolve, reject)=>{
  setTimeout(()=>{
    const rand = Math.ceil(Math.random() * 10)
    if (rand > 5) {
      resolver("Success")
    } else {
      reject("Error")
    }
  },1000)
})

promise
  .then(function(response){
    console.log(response)
  })
  .catch(function(error){
    console.log(error)
  })
