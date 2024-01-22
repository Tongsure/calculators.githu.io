const ExpressionEl = document.getElementById("expression");
const ResultEl = document.getElementById("result");
const history = document.getElementById("history_number");
let step = false;
let dot = false;
let specialChar = ["+", "-", "*", "/", "×","÷","%","%"];
let result = 0;
let num = ["1", "2", "3", "4", "5","6","7","8","9"];
let operator_prevent = num.join('+');
let prevent = operator_prevent.match(/\d+\+/g);
let Num_Operator = [prevent];
let operators = false;
let dotClicked = false;
let slide =false;
let historyArray =[];
let ended_result = true;
let ended_result2 = true;
let ended = true;
let Zero = false;
let Dot_after =true;
let bracket ;
const currentDate = new Date();
let hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
// Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
const dayOfWeek = currentDate.getDay();
// You can use an array to map the numeric representation to the day name
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[dayOfWeek];
function updatetime(){
  const currentDate = new Date();
let hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
// Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
const dayOfWeek = currentDate.getDay();
const monthofyear = currentDate.getMonth
// You can use an array to map the numeric representation to the day name
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[dayOfWeek];
document.getElementById("time").innerHTML = `<span class="currentDay">${currentDay}</span>  / ${dayOfWeek} , ${hours}:${minutes}:${seconds}`
setTimeout(() => {
  updatetime();
 }, 1000)
}
updatetime()


  
function number(input){
    let string = ExpressionEl.textContent;
    var lastChar = string.slice(-1);
    var secondchar = string[string.length-2];
    let splitstring = string.split('')
    console.log(secondchar)
    console.log(lastChar)
    for( i = 0 ; i<splitstring.length ; i++){
      if(i>13){
        return;
      }
    }
    
    if(input === '0'){
        ExpressionEl.style.fontSize ='40px';
        ExpressionEl.style.color ='white';
        ResultEl.style.display = 'none';
      if(string  === '0' && lastChar === '0'){
        ExpressionEl.textContent  = '0';
        
      }
      // else if(specialChar.includes(lastChar)){
      //   return;
      // }
      else{
        ExpressionEl.textContent  = input;
        
    
      }
    }
    if (input == "(" || input == ")") {
      if (bracket) {
          ExpressionEl.textContent = string + ")";
          bracket = false;
          return;
      } else {
          ExpressionEl.textContent = string + "(";
          bracket = true;
          return;
      }
  }
    if (num.includes(input)) {
        ExpressionEl.style.fontSize ='40px';
        ExpressionEl.style.color ='white';
        ResultEl.style.display = 'none';
      if(ended_result === false){
        ExpressionEl.textContent = input;
        ended_result = true;
      }
      else if(string  === "0"){
        ExpressionEl.textContent = string .slice(0,-1) + input;
        // alert("dsc")
      }
      else if(lastChar === "0" && specialChar.includes(secondchar)){
        ExpressionEl.textContent = string .slice(0,-1) + input;
        // alert("sdcdc")
      }
      else if(string  === "0" || lastChar === "0" ){
        if(num.includes(input)){
            ExpressionEl.textContent += input;
         
        }
      }
      else{
        ExpressionEl.textContent += input;
        // alert("num")
      }
    }
    // prevent multiple click on operator
    else if(specialChar.includes(lastChar) && input !== '.'){
        ExpressionEl.textContent = string.slice(0,-1) + input;
      return;
    }
    
    console.log(lastChar)
    if(step === false){
      if(string === "" && input === '.'){
        ExpressionEl.textContent = `0${input}`;
        step = true;
        dot = true;
    
      }   
    }      
    // let data = display.value; 
    // let cen = string[string.length-1]   
         
    if(specialChar.includes(input)){
      
      if(ended_result === false){
        ExpressionEl.textContent = `0${input}`;
        ended_result = true;
      }
      else if(input === "%"){
        ExpressionEl.style.fontSize ='20px';
        ExpressionEl.style.color ='grey';
        ResultEl.style.display = 'block';
        ExpressionEl.textContent = string;
        ResultEl.textContent = string/100;
        // alert("dsfsdf")
        return;
      }
      else if(lastChar === "."){
        ExpressionEl.textContent = string.slice(0,-1) + input;
      }
      // else if(display.value%2 == 0){
      //   return parseInt(data)
      // }
      else if(parseFloat(string) === 0  && lastChar === '0'){
        ExpressionEl.textContent = `0${input}`;
        console.log(string)
      }
      else if (!string){
        ExpressionEl.textContent += `0${input}`;
      }
      else{
        ExpressionEl.textContent += input;
      }
      dot = false;
    }
    if(dot === false && input === '.'){
      if(specialChar.includes(lastChar)){
        ExpressionEl.textContent += '0.'; 
      } 
      else{
        ExpressionEl.textContent += input;
        input.replace(/\*/g, '×').replace(/\//g,'÷');
      }
      dot = true;
      Dot_after = false;
    }
    }

    function Calculator() {
      
        // console.log(currentDay)
        if(hours > 13){
          hours = hours - 12;
          // alert(hours)
        }
       
        let string = ExpressionEl.textContent;
        var lastChar = string.slice(-1);
       if("+ , -".includes(lastChar)){
        ExpressionEl.textContent = string.slice(0, -1);
        // ExpressionEl.textContent = displayEl.value.slice(0, -1);
        // alert(display.value )
       }
       else if("* , / , × , ÷ ".includes(lastChar)){
        // let last = displayEl.value.slice(0, -1);
        if("/ , ÷ ".includes(lastChar)  && last != "0"){
          let total = Function(`'use strict'; return (${last})`)();
          ExpressionEl.textContent= total/total;
          ResultEl.textContent = `${total} ÷ ${total}`
          return;
        }
        else if("/ , ÷ ".includes(lastChar) && last == 0){
            ExpressionEl.textContent = "infinite"
          return;
        }
        else if("* , × ".includes(lastChar)){
          let total = Function(`'use strict'; return (${last})`)();
          ExpressionEl.textContent = total*total;
          ResultEl.textContent = `${total}×${total}`
          return;
        }
       
      
       }
      
      
      
         var expression = ExpressionEl.textContent;
         expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        //  expression = expression.replace(/\*/g, '×').replace(/\//g, '÷');
         console.log(typeof expression)
          try{
            result = Function(`'use strict'; return (${expression})`)();
            console.log(result)
            ExpressionEl.textContent = `${string} =`
            ResultEl.textContent = result;
            // ExpressionEl.textContent = result;
            ExpressionEl.style.fontSize ='20px';
            ExpressionEl.style.color ='grey';
            ResultEl.style.display = 'block';
            ended_result = false;
            ended_result2 = false;
            
           
        //    }
          } 
        catch(error) { 
            ExpressionEl.style.fontSize ='20px';
            ExpressionEl.style.color ='grey';
            ResultEl.style.display = 'block';
            ResultEl.textContent = 'Error Syntax';
            // ExpressionEl.textContent = 'Error Syntax';
        }
        let total = "";
        historyArray.push(`${string} = ${result}`);
        console.log(historyArray);
        
        // Loop through historyArray to build the HTML and set total
        let storehistory = historyArray.map((item) => `
          <div>
            <p id="day">${currentDay}, ${hours}:${minutes}:${seconds}</p><br>
            <p id="num">${item}</p><br>
            <div id="copyButtonContainer">
              <button id="copyButton">Copy</button>
            </div>
            <hr>
          </div>`).join('');
        
        // Assign the last item in historyArray to the total variable
        total = historyArray[historyArray.length - 1];
        
        console.log(storehistory);
        history.innerHTML = storehistory;
        
        // Select the text you want to copy
        let storeCopy = `${currentDay}, ${hours}:${minutes}:${seconds}\n ${total} `;
        var textToCopy = storeCopy;
        
        // Get references to all copy buttons
        var copyButtons = document.querySelectorAll("#copyButton");
        
        // Add a click event listener to each copy button
        copyButtons.forEach((copyButton) => {
          copyButton.addEventListener("click", function () {
            // Create a temporary textarea element
            var textarea = document.createElement("textarea");
            textarea.value = textToCopy;
        
            // Append the textarea to the document
            document.body.appendChild(textarea);
        
            // Select the text inside the textarea
            textarea.select();
        
            try {
              // Execute the copy command
              navigator.clipboard.writeText(textToCopy).then(function () {
                // Update the specific copy button text
                copyButton.innerText = "Copied";
                setTimeout(function () {
                  copyButton.innerText = "Copy";
                }, 800);
              });
            } catch (error) {
              console.error("Unable to copy text to clipboard", error);
            }
        
            // Remove the temporary textarea
            document.body.removeChild(textarea);
          });
        });
        

    }
    function clearDisplay(){
        ExpressionEl.style.fontSize ='40px';
        ExpressionEl.style.color ='white';
        ResultEl.style.display = 'none';
        ExpressionEl.textContent = "";
        // displayEl.value = "";
        ResultEl.textContent = "";
        step =  false;
        steps = false;
        dots = false;
        dot = false;
        ended_result2 = true;
        ended_result = true;
        bracket = false;
    }
    function deletes(){
      var lastChar1 = ExpressionEl.textContent.slice(-1);

      if(ExpressionEl.textContent .slice(-1) == "("){
        bracket = false;
      }
      else if(ExpressionEl.textContent .slice(-1) == ")"){
        bracket = true;
      }
      if(!ExpressionEl.textContent ){
        resultEl.value = "";
      }
      if(ExpressionEl.textContent .slice(-1) == "."){
        Zero = false;
        Zero1 = false;
      }
      if(specialChar.includes(lastChar1)){
      dot = false;
      dots = false;
      }
      if(!ExpressionEl.textContent || ExpressionEl.textContent  === "0"){
        step = false;
        steps = false;
        ExpressionEl.textContent = "";
      }
      else if(ExpressionEl.textContent  === "Error Syntax" || ended_result2 === false ){
        ExpressionEl.textContent = "";
        ended_result2 = true;
        ended_result = true;
        
      }
      else if(".".includes(lastChar1)){
        ExpressionEl.textContent = ExpressionEl.textContent .substring(0,ExpressionEl.textContent .length - 1);
        dot = false;
        dots = false;
      }
      else if("+-*/".includes(lastChar1) && Dot_after === false){
        ExpressionEl.textContent = ExpressionEl.textContent .substring(0,ExpressionEl.textContent .length - 1);
        dot = true;
        dots = true;
      }
      else{
        ExpressionEl.textContent = ExpressionEl.textContent .substring(0,ExpressionEl.textContent .length - 1);
       
      }
     
      // displayEl.value = displayEl.value.substring(0,displayEl.value.length - 1);
     
    }
    // document.getElementById("copyButton").addEventListener("click" , function(){
    //   document.getElementById("copyButton").innerText = "copied"
    // })