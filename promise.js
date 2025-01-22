let firtPromise = new Promise((resolve, reject) => {
    function sayname() {
        console.log("Suman Shekhar");
        resolve(1); // Resolve the promise after sayname is called
    }
    
    setTimeout(sayname, 1500); // Delay the execution of sayname by 1500ms
});
