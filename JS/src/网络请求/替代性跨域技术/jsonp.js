function callbackFunction(response){
    console.log(response); 
 }

 let script = document.createElement("script");

 script.src = "https://jsonplaceholder.typicode.com/posts/?callback=callbackFunction"
 document.body.insertBefore(script,document.body.firstChild)