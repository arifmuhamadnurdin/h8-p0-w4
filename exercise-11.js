function shoppingTime(memberId, money) {
  // you can only write your code here!
  var priceList = [
      ['Sepatu Brand Stacattu', 1500000], 
      ['Baju Brand Zoro', 500000], 
      ['Baju Brand H&M', 250000], 
      ['Sweater Brand Unikloh', 175000], 
      ['Casing Handphone', 50000]];
  var temp = []
  var shop = {}
  var uang = money
  for (var i = 0; i < priceList.length; i++) {
     if (uang >= priceList[i][1]) {
       uang -= priceList[i][1]
       temp.push(priceList[i][0])
     }
     shop.memberId = memberId
     shop.money = money
     shop.listPurchased = temp
     shop.changeMoney = uang
    if (memberId === undefined || memberId === '') {
      return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }if (money < priceList[4][1]) {
      return 'Mohon maaf, uang tidak cukup'
    } 
  }
  return shop
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja