module.exports = function longestConsecutiveLength(array) {
  // your solution here
    let longerSequensyKey;
    let lengthArray = array.length, hashMap = {};

    if (array.length === 0) {
        return 0;
    }

    for (let i = 0; i < lengthArray; i++){
      hashMap[array[i]] = [array[i]];

      if (hashMap[array[i]+1] && hashMap[array[i]-1]) {
          hashMap[array[i]] = [].concat(hashMap[array[i]-1],array[i],  hashMap[array[i]+1]);
      } else if (hashMap[array[i]+1]) {
          hashMap[array[i]] = [].concat(array[i], hashMap[array[i]+1]);
      } else if (hashMap[array[i]-1]) {
           hashMap[array[i]] = [].concat( hashMap[array[i]-1], array[i]);
      }

      if (longerSequensyKey === undefined || hashMap[array[i]].length > hashMap[longerSequensyKey].length) {
          longerSequensyKey = array[i];
      }
    }

     return hashMap[longerSequensyKey].length || 0;
}

