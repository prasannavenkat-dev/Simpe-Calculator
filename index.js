


/*CONTAINER*/

var container = document.createElement("div");
container.setAttribute("class","container");
           /*CALCULATOR */
         var calculator = document.createElement("div");
         calculator.setAttribute("class","row calculator");
           
                 /*DISPLAY */
                   var flag;
                 var display = document.createElement("div");
                 display.setAttribute("class"," col-12  display pl-5");
                
                 var memory = document.createElement("div");
                memory.setAttribute("class","col-4 memory lightBlue");
                 
                 var input =document.createElement("div");
                 input.setAttribute("class","col-8 lightBlue")
                  
                  var input1 = document.createElement("input");
                  input1.setAttribute("type","text");
                  input1.style.fontSize="3vw";

                  /*buttons */

                  var backSpace = document.createElement("button");
                  backSpace.setAttribute("class","col-2 col-xs-6 btn btn-block btn-lg darkGrey mt-2");
                  backSpace.addEventListener("click",leftArrow);
                  function leftArrow(){
                    input1.value = input1.value.substring(0,input1.value.length-1);

                  }
                  backSpace.innerHTML='<-';


                  var cE = document.createElement("button");
                  cE.setAttribute("class","col-2 col-xs-6 btn btn-block btn-lg darkGrey");
                  cE.addEventListener("click",function(){
                         
                    display.innerHTML="";
                    input1.value="";
                })
                  cE.innerHTML='CE';


                  var C = document.createElement("button");
                  C.setAttribute("class","col-2 col-xs-6 btn btn-block btn-lg darkGrey");
                  C.addEventListener("click",function(){
                    input1.value="0";
                  });
                  C.innerHTML='C';


                  var mR = document.createElement("button");
                  mR.setAttribute("class","col-2 col-xs-6 btn btn-block btn-lg darkGrey");
                  mR.addEventListener("click",recall);
                  function recall(){
              
                   input1.value = mAns;
                  
                    
                  }
                  mR.innerHTML='MR';


                   var mAns;
                  var mPlus = document.createElement("button");
                   mPlus.setAttribute("class","col-2 col-xs-6 btn btn-block btn-lg darkGrey");
                   mPlus.addEventListener("click",function(){
                    mAns= +input1.value;
                   memory.innerHTML= "M";
                 
                    
                  });
                  mPlus.innerHTML='M+';


                  var mMinus = document.createElement("button");
                  mMinus.setAttribute("class","col-2  btn btn-block btn-lg darkGrey");
                  mMinus.addEventListener("click",function(){
                    mAns=mAns-(+input1.value);      
                   memory.innerHTML = "M";
                  });
                  mMinus.innerHTML='M-';

                  /*col-9 buttons */

                  var col9_buttons = document.createElement("div");
                  col9_buttons.setAttribute("class","col-9");

                         /*button_row1 */

                         var button_row1 =document.createElement("div");
                         button_row1.setAttribute("class","row");


                              /*buttons */
                           
                               var num7 = document.createElement("div");
                               num7.setAttribute("class","col-3 btn btn-lg lightGrey btn-block mt-2");
                               num7.addEventListener("click",seven)
                               function seven(){
                                 input1.value+="7";
                               };
                               num7.innerHTML="7";


                               var num8 = document.createElement("div");
                               num8.setAttribute("class","col-3 btn btn-lg lightGrey btn-block");
                               num8.addEventListener("click",eight)
                               function eight(){
                                 input1.value+="8";
                               };
                               num8.innerHTML="8";


                               var num9 = document.createElement("div");
                               num9.setAttribute("class","col-3 btn btn-lg lightGrey btn-block");
                               num9.addEventListener("click",nine)
                               function nine(){
                                 input1.value+="9";
                               };
                               num9.innerHTML="9";


                               var slash = document.createElement("div");
                               slash.setAttribute("class","col-3 btn btn-lg lightGrey btn-block");
                               slash.addEventListener("click",divide);
                               function divide(){
                                if(flag===2){
                          
                            
                                  operand1 = input1.value;
                                  display.innerHTML=input1.value+'/' ;
                                  
                                  operator="/";
                                  input1.value="";
                              }
                                else{
                                  operand1 = input1.value;
                                  display.innerHTML=input1.value + "/";
                                  operator="/";
                                  input1.value="";
                               
                                }
                               }
                               slash.innerHTML="/";

                  /*col-3 button */

                  var col3_button = document.createElement("div");
                  col3_button.setAttribute("class","col-3 btn btn-lg btn-block  mt-2 orange1");
                  col3_button.addEventListener("click",function(){
                   memory.innerHTML="";
                  });
                  col3_button.innerHTML="mC";



                  /*col-9 buttons2 */

                  var col9_buttons2 = document.createElement("div");
                  col9_buttons2.setAttribute("class","col-9");


                     /*button_row1 */

                     var button_row2 =document.createElement("div");
                     button_row2.setAttribute("class","row");
                
                         /*buttons */

                         var num4= document.createElement("div");
                         num4.setAttribute("class","col-3 btn btn-lg btn-block lightGrey mt-2");
                         num4.addEventListener("click",four)
                         function four(){
                           input1.value+="4";
                         };
                         num4.innerHTML="4";

                         var num5= document.createElement("div");
                         num5.setAttribute("class","col-3 btn btn-lg btn-block lightGrey");
                         num5.addEventListener("click",five)
                         function five(){
                           input1.value+="5";
                         };
                         num5.innerHTML="5";

                         var num6= document.createElement("div");
                         num6.setAttribute("class","col-3 btn btn-lg btn-block lightGrey");
                         num6.addEventListener("click",six)
                         function six(){
                           input1.value+="6";
                         };
                         num6.innerHTML="6";

                         var star= document.createElement("div");
                         star.setAttribute("class","col-3 btn btn-lg btn-block lightGrey");
                         star.addEventListener("click",multiply);
                         function multiply(){
                         
                          if(flag===2){
                          
                            
                            operand1 = input1.value;
                            display.innerHTML=input1.value+'*' ;
                            
                            operator="*";
                            input1.value="";
                        }
                          else{
                            operand1 = input1.value;
                            display.innerHTML=input1.value + "*";
                            operator="*";
                            input1.value="";
                         
                          }
                        }
                         star.innerHTML="*";

                         var num1= document.createElement("div");
                         num1.setAttribute("class","col-3 btn btn-lg btn-block lightGrey");
                         num1.addEventListener("click",one)
                         function one(){
                           input1.value+="1";
                         };
                         num1.innerHTML="1";

                         var num2= document.createElement("div");
                         num2.setAttribute("class","col-3 btn btn-lg btn-block lightGrey");
                         num2.addEventListener("click",two)
                         function two(){
                           input1.value+="2";
                         };
                         num2.innerHTML="2";

                         var num3= document.createElement("div");
                         num3.setAttribute("class","col-3 btn btn-lg btn-block lightGrey");
                         num3.addEventListener("click",three)
                         function three(){
                           input1.value+="3";
                         };
                         num3.innerHTML="3";

                         var hyphen= document.createElement("div");
                         hyphen.setAttribute("class","col-3 btn btn-lg btn-block lightGrey hyphen");
                         hyphen.addEventListener("click",subtract);
                         function subtract(){
                          if(flag===2){
                          
                            
                            operand1 = input1.value;
                            display.innerHTML=input1.value+'-' ;
                            
                            operator="-";
                            input1.value="";
                        }
                          else{
                            operand1 = input1.value;
                            display.innerHTML=input1.value + "-";
                            operator="-";
                            input1.value="";
                         
                          }
                        }
                         hyphen.innerHTML="-";

                         var num0= document.createElement("div");
                         num0.setAttribute("class","col-6 btn btn-lg btn-block lightGrey");
                         num0.addEventListener("click",zero)
                         function zero(){
                           input1.value+="0";
                         };
                         num0.innerHTML="0";

                         var fullStop= document.createElement("div");
                         fullStop.setAttribute("class","col-3 btn btn-lg btn-block lightGrey");
                         fullStop.addEventListener("click",dot)
                         function dot(){
                           input1.value+=".";
                         };
                         fullStop.innerHTML=".";

                         var plus= document.createElement("div");
                         plus.setAttribute("class","col-3 btn btn-lg btn-block lightGrey");
                         plus.addEventListener("click",add);
                         function add(flag){
                          
                          if(flag===2){
                          
                            
                            operand1 = input1.value;
                            display.innerHTML=input1.value+'+' ;
                            
                            operator="+";
                            input1.value="";
                        }
                          else{
                            operand1 = input1.value;
                            display.innerHTML=input1.value + "+";
                            operator="+";
                            input1.value="";
                         
                          }
                        
                         
                        }
                         plus.innerHTML="+";

                   /*col-3 button2 */

                   var col3_button2 = document.createElement("div");
                   col3_button2.setAttribute("class","col-3 btn btn-lg btn-block  mt-2 pt-5 orange1");
                   col3_button2.addEventListener("click",equalTo)
                     
                   function equalTo(){
                        operand2=input1.value;
                        
                         calculation(operand1,operator,operand2);
                          
        
                                 }
                   col3_button2.innerHTML="=";



                    input1.addEventListener("keypress",alpha);
                        
                    function alpha(){
                              
                            var arr = input1.value;
                           
                     
                               
                                if(arr[arr.length-1]>='a'&&arr[arr.length-1]<='z'){
                                    alert("Enter Number!")
                                    input1.value = input1.value.substring(0,input1.value.length-1);     
                     
                            }
                          
                        
                  
                       
                    }
                      
                              
                
                     
     

               
                  

                   /*KEY PRESS*/

var alertMsg= document.createElement("div");

document.body.addEventListener("keyup",pressed);
function pressed(e){
      
  if((e.key>="0" && e.key<="9")||e.key==='+'||e.key==='-'||e.key==="/"||e.key==="*"||e.key==="."||e.key==="Backspace")
    {
    
     if(e.key==='+'){
       input1.value = input1.value.substring(0,input1.value.length-1)
       add(flag=2);
     }
     if(e.key==='-'){
      input1.value = input1.value.substring(0,input1.value.length-1)
      subtract(flag=2);
    }
    if(e.key==='*'){
      input1.value = input1.value.substring(0,input1.value.length-1)
      multiply(flag=2);
    }
    if(e.key==='/'){
      input1.value = input1.value.substring(0,input1.value.length-1)
      divide(flag=2);
    }
    
    }
    
   
           
  
     
    
  
};


setTimeout(function(){
  alertFun();

},500)

   
  function alertFun(){
    
    
        alertMsg.setAttribute("class","alert alert-warning alert-dismissible fade show alertMsg");
        alertMsg.setAttribute("role","alert");
        alertMsg.innerHTML="<strong>Warning!</strong> Enter Numbers Only.";
        var close1 = document.createElement("button");
        close1.setAttribute("type","button");
        close1.setAttribute("class","close");
        close1.setAttribute("data-dismiss","alert");
        close1.setAttribute("aria-label","close")
        close1.innerHTML="<span aria-hidden='true'>&times;</span>";



           
        alertMsg.append(close1);
    


  }


    /*CALCULATION */
    function calculation(operand1,operator,operand2){

        var res;
            /*operator */  
        if (operator==="+"){
           display.innerHTML+=input1.value;
            res=(+operand1)+(+operand2);
            input1.value="";
            input1.value=res;
        }
        else if (operator==="-"){
          display.innerHTML+=input1.value;
            res=(+operand1)-(+operand2);
            input1.value="";
            input1.value=res;
        }
        else if (operator==="*"){
          display.innerHTML+=input1.value;
          res=(+operand1)*(+operand2);
          input1.value="";
          input1.value=res;
        }
        else if (operator==="/"){
          display.innerHTML+=input1.value;
          res=(+operand1)/(+operand2);
         input1.value="";
          input1.value=res;
        }
  
      }
  

/*APPENDING*/
calculator.append(alertMsg);

calculator.append(display);
calculator.append(memory);
calculator.append(input);
input.append(input1);


/*buttons */
calculator.append(backSpace);
calculator.append(cE);
calculator.append(C);
calculator.append(mR);
calculator.append(mPlus);
calculator.append(mMinus);

  /*button row1 */

  calculator.append(col9_buttons);
  col9_buttons.append(button_row1);
  button_row1.append(num7);
  button_row1.append(num8);
  button_row1.append(num9);
  button_row1.append(slash);
     
    /*col-3 button */
    calculator.append(col3_button);


    /*button row2 */

    calculator.append(col9_buttons2);
    col9_buttons2.append(button_row2)
    button_row2.append(num4);
    button_row2.append(num5);
    button_row2.append(num6);
    button_row2.append(star);
    button_row2.append(num1);
    button_row2.append(num2);
    button_row2.append(num3);
    button_row2.append(hyphen);
    button_row2.append(num0);
    button_row2.append(fullStop);
    button_row2.append(plus);
    
    /*col-3-button2 */

    calculator.append(col3_button2);

container.append(calculator);
document.body.append(container);
