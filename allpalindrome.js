function isPalindrome(str){
    let str2 =str.split('').reverse().join('')
    return str == str2
}

function getAllSubstrings(str, size) {
  var i, j, result = [];
  size = (size || 0);
  for (i = 0; i < str.length; i++) {
    for (j = str.length; j - i >= size; j--) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

function longestPalindrome(str){
    let strArr=[];
    let max_length=0
    let maxp=''
    for(let i=0;i < str.length;i++){
            let subs=str.substring(i);
        for(let j=subs.length;j>=0;j--){
           var sub_subs_str = subs.substr(0, j);
        //   console.log(sub_subs_str)
          if (isPalindrome(sub_subs_str)){
            //Below comment code to fine the longest palindromes 
                // if (sub_subs_str.length > max_length){
                //     max_length = sub_subs_str.length;
                //     maxp = sub_subs_str;
                // }
                
                if(sub_subs_str.length > 2){
                    strArr.push(sub_subs_str)
                }
            }
        }
    }
    return strArr;
}
