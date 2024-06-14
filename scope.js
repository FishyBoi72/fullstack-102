function outer(){
    let a = "Hello";
    let b = { key: "value" };
    console.log("Outer a:", a);
    console.log("Outer b:", b);
    
    function inner(a, b) {
        console.log("Inner a:", a);
        console.log("Inner b:", b);
    }
  
    inner();
  }
  
  outer();
  