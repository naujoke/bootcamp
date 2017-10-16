var posts = "Javascript nėra Java";

function zodis(string){
   
    var stringArray = string.split(" "); 
    var longest = "";
    
    for( word in stringArray ) {
      if(stringArray[word].length > longest.length ) {
        longest = stringArray[word];
      }
        
    } 
   return longest; 
}

console.log(zodis(posts));



