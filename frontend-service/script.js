const text=document.getElementById("quote");
const author=document.getElementById("author");

const getNewQuote = async () =>
{
    //api for quotes
    var url="http://backend-service/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const quoteInfo = await response.json();


    //Store the quote present at the randomly generated index
    const quote=quoteInfo.text;
    
    //Store the author of the respective quote
    const auth=quoteInfo.from;

    if(auth==null)
    {
        author = "Anonymous";
    }
 
    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;


}

getNewQuote();
