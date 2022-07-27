const isPrime = (num) => {
    if (num < 2) return false
    for (var i = 2; i < num; i++) {
      if (num % i == 0) return false
    }
    return true
  }
  
  function rang(from,to){
      let resp = []
      if(to>from){
          for(let i = from; i < to-from; i++){
              resp.push(i)
          } return resp
      }
  }

  function validations(num) {
    return isNaN(num) || num > 0
  }
  
  function getPrimeNumbersBetween(from, to) {
    if (from < to && validations(from) && validations(to)) {
      const arr = rang(from, to, 1)
      const primeNumbers = arr.filter(isPrime)
      return primeNumbers
    }
    return 'numeros incorrectos'
  }

console.log(getPrimeNumbersBetween(2, 10))