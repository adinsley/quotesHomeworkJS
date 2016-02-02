// Creating the Quotes
var Quote = function(text, who){
  this.statement = text;
  this.author = who;
}
//Hard Coding in first 4 quotes//
var quote1 = new Quote("Visual Basic is the way forward, I don't know why we are doing Javascript", "Jay Chetty");
var quote2 =new Quote("The only CSS you need to know is background-color: tomato", "Rick Henry")
var quote3 = new Quote("No Blockers *smug tone*", "Keith Douglas")
var quote4 =new Quote("Scaffold is nothing but a fiery hell", "Valerie Gibson")

//Pushing them into the quotes array//
var quotesArray = []
quotesArray.push(quote1)
quotesArray.push(quote2)
quotesArray.push(quote3)
quotesArray.push(quote4)

var quoteLoad = function(){
  for (var i = 0; i < quotesArray.length;  i++){
    addQuote(quotesArray[i]);
  }
};

var addQuote = function(quote){
  var blockquote = document.createElement("blockquote");
  blockquote.innerText = quote.statement;
  var cite = document.createElement("cite");
  cite.innerText =" - " + quote.author;
  blockquote.appendChild(cite);

  var removeButton = document.createElement("button")
  removeButton.innerText = "Delete Quote"
  removeButton.style.backgroundColor = "red"
  removeButton.onclick = function(){
   this.parentNode.parentNode.removeChild(this.parentNode);
  }
  blockquote.appendChild(removeButton);

  var quotes = document.querySelector("article");
  quotes.appendChild(blockquote);
  quoteStyling();
}

var handleClick = function(){
 var statementText = document.getElementById("quote-text-input").value;
 var authorText = document.getElementById("author-text-input").value || "anon";
 var quoteNew = new Quote(statementText, authorText)
 addQuote(quoteNew);
 document.getElementById("quote-text-input").value = ""
  ;
  getVal();

}

var quoteStyling = function(){
  var articles  = document.querySelectorAll('blockquote');
  for (var i = 0; i < articles.length;  i++) {
    if ((i+1) % 2 === 0) {
      articles[i].style.backgroundColor = "wheat";
      articles[i].style.color = "tomato";
    } else {
      articles[i].style.backgroundColor = "tomato";
      articles[i].style.color = "wheat";
    }
  }
}

function getVal() {
      var x = document.getElementById("quote-text-input");
     document.getElementById("fname").innerText = x.value ;
}

var init = function(){
  quoteLoad();
  button = document.getElementById("add-button");
  button.onclick = handleClick;

document.getElementById("quote-text-input").addEventListener("keypress", getVal);
 
}


window.onload = init;

