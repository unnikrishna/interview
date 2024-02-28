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

//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////PROMISE ALL////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


if (!Promise.all) {
  Promise.all = function(promises) {
    return new Promise(function(resolve, reject) {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('arguments must be an array'));
      }
      var resolvedCount = 0;
      var resolvedValues = new Array(promises.length);
      promises.forEach(function(promise, index) {
        Promise.resolve(promise).then(function(value) {
          resolvedCount++;
          resolvedValues[index] = value;
          if (resolvedCount === promises.length) {
            resolve(resolvedValues);
          }
        }, function(error) {
          reject(error);
        });
      });
    });
  };
}

//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////PROMISE ALLSETTLLED////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

if (!Promise.allSettled) {
  Promise.allSettled = function(promises) {
    return new Promise(function(resolve) {
      if (!Array.isArray(promises)) {
        throw new TypeError('arguments must be an array');
      }

      var settledPromises = [];
      var settledCount = 0;

      function handleSettled(promiseResult, index, status) {
        settledPromises[index] = {
          status: status,
          value: promiseResult,
        };
        settledCount++;
        if (settledCount === promises.length) {
          resolve(settledPromises);
        }
      }

      promises.forEach(function(promise, index) {
        Promise.resolve(promise).then(
          function(value) {
            handleSettled(value, index, 'fulfilled');
          },
          function(reason) {
            handleSettled(reason, index, 'rejected');
          }
        );
      });
    });
  };
}
