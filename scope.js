function outer(){
    let a = "Hello";
    let b = { key: "value" };
    console.log("Outer a:", a);
    console.log("Outer b:", b);
    
    function inner(a, b) {
        console.log("Inner a (before):", a);
        console.log("Inner b (before):", b);
        a = "World";
        b.key = "updatedValue";
        console.log("Inner a (after):", a);
        console.log("Inner b (after):", b);
    }
  
    inner(a, b);
    console.log("Outer a (after inner):", a);
    console.log("Outer b (after inner):", b);
  }
  
  outer();
  