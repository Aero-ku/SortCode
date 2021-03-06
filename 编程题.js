//获取数组最小值
function getMinNumber(arr){
  var minNum = arr[0];
  var len = arr.length;
  for(var i = 0; i < len; i++){
    if(minNum > arr[i]){
      var temp = minNum;
      minNum = arr[i];
      arr[i] = temp;
    }
  }
  console.log(minNum);
}

//将该数组[1,2,3,4,[5,6,7,8],[9,10,11,[12,13,14,15,[16],17],18],19,20]
//转化成[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function reverseArray(arr,newArr){
  var len = arr.length,
      newArr = newArr || [];
  for(var i = 0; i < len; i++){
    if(typeof arr[i] == 'object'){
      reverseArray(arr[i],newArr);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//插入排序
function insertSort(arr){
  var len = arr.length;
  var temp, current;
  for(var i = 1; i < len; i++){
    for(var j = i; j > 0 && arr[j] < arr[j-1]; j--){
      temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
    }
  }
  return arr;
}


