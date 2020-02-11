function ubahHuruf(kata) {
  var huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var tampung = '';
  
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < huruf.length; j++) {
      if (kata[i] === huruf[j]) {
        tampung += huruf[j+1]
      }
    }
  }
  return tampung;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu