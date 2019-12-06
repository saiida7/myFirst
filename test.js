function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var arr1=new Array();
    console.log(arr1);
    for(var i=0; i<arr.length;i++){
      if(arr[i]){
        arr1.push(arr[i]);
      }
    }
    return arr1;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  console.log("hello");
  console.log("fatma");