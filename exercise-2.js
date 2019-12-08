function fpb(angka1, angka2) {
  // you can only write your code here!
  for (var x=angka1; x>0; x--){
    if(angka2 % x === 0 && angka1 % x===0){
     
        return x;
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1