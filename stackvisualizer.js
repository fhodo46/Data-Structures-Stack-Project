//All these variables are going to select the CSS classes.

const pushthestack= document.querySelector(".push");

const popthestack= document.querySelector(".pop");
const refreshbutton = document.querySelector(".refresh");

const stackbox= document.querySelector(".stackbucket");
const inputfromtheuser= document.querySelector(".text");
const message= document.querySelector(".message");

const messagebox= document.querySelector(".messagebox");

const informationbox= document.querySelectorAll(".box");

const sizeofstackbox= document.querySelector(".box");



const stackarray=[];  //We also declare a stack array that will initially be empty first.


const disablebutton= () => {    //The button will be frozen during the stack O(1) operations (push, pop etc.)
           //It does so for all 3 buttons.

    pushthestack.disabled = true;
    pushthestack.classList.add("freezestate");
    popthestack.disabled=true;
    popthestack.classList.add("freezestate");
    refreshbutton.disabled=true;
    refreshbutton.classList.add("freezestate");

    inputfromtheuser.disabled=true;
} 

const enablebutton = () =>  {   //The button will revert back to its state after a while, where the user can do his operations
    //again. It does so for all 3 buttons as well.
    pushthestack.disabled= false;
    pushthestack.classList.remove("freezestate");

    popthestack.disabled= false;  popthestack.classList.remove("freezestate");

    refreshbutton.disabled= false;   refreshbutton.classList.remove("freezestate");   inputfromtheuser.disabled=false;
}     
pushthestack.addEventListener("click", () =>  { 
   if(inputfromtheuser.value == "")  /*If the user attempts to enter an element into a stack without entering
   anything, the message "Please enter a value" will be shown  */





   {   
    message.innerHTML= "Please enter a value.";
    messagebox.classList.add("errormessage");
       setTimeout(   ()  =>   
       {
     messagebox.classList.remove("errormessage"); }, 1200  );  return; }  //This will execute after 1200 milliseconds
   
   
   
   
   
     if(stackarray.length==5)  //We set the stack length 5. If it exceeds 5, that means that the user cannot enter
     //elements anymore and the message "Full stack, please pop or refresh" will be shown.
     {
        
    message.innerHTML= "Full stack, please pop or refresh";
    messagebox.classList.add("errormessage");
    setTimeout(  () =>  
    {
        messagebox.classList.remove("errormessage");
    }, 1200);
    return;
}
const output= inputfromtheuser.value;
stackarray.push(output);  //It is needed for the value of the output that should be an integer, or it will return
//undefined otherwise.


const element= document.createElement("div");  /*it instantiates the items pushed and treats
them as a div or nothing will be visible  */
element.classList.add("bucketelement");
     element.innerText= stackarray[stackarray.length-1];  //It ensures that elements are updated and do not stay the same
    stackbox.appendChild(element);
    informationbox[0].innerHTML = stackarray[stackarray.length-1];  //will return the top of the stack
    inputfromtheuser.value="";
    element.classList.add("addelement");
    disablebutton();
    setTimeout(()  =>  {
    element.classList.remove("addelement");  
    informationbox[1].innerHTML= output;   //will show the last item pushed 
    message.innerHTML= `The item that is pushed is ${stackarray[stackarray.length - 1]}`;
    /*The item that is pushed will invariably be on top of the others; it only clarifies the user with 
    a message of what he pushed last.  */
    enablebutton();
}, 1500);    });








popthestack.addEventListener("click", () => {
    if(stackarray.length==0){                     //If the stack is empty, there is nothing to pop.
        messagebox.classList.add("errormessage");
        message.innerHTML= "Cannot pop more elements";
        setTimeout( () =>  {  
            
            messagebox.classList.remove("errormessage");
        }, 1200);  return;  //The error message will be removed after a while.
    }
    stackbox.lastElementChild.classList.add("removeelement");

    disablebutton();
    setTimeout( ()=>  {     
        stackbox.removeChild(stackbox.lastElementChild);  //If the code lacks this part, the element will never be removed.
        //If the stack is like an array, its "lastelementchild" is the top of the stack, so this is what is removed.
       const output= stackarray.pop();

       informationbox[2].innerHTML= output;

       if(stackarray.length==0){
        informationbox[0].innerHTML = "";  //The top of the stack will be empty (there will be nothing there)
        //if there are no more stack elements after popping.
    }
    else {
        informationbox[0].innerHTML = stackarray[stackarray.length-1]; 

       //It will otherwise return one element below the element that was popped as a number in the box "Top of the Stack"

    }

    message.innerHTML= `The item that is popped is ${output}`;  enablebutton(); }, 1500); } 
    );




    refreshbutton.addEventListener("click", () => {
         while(stackarray.length>0){   /*It pops all elements until the length of the stack array is 0 (there are no more
            elements left). */
        stackarray.pop();} 
        informationbox[0].innerHTML= ""; informationbox[1].innerHTML= ""; informationbox[2].innerHTML= "";   
        message.innerHTML= "";   //Everything that shows information about the stack will be remove

        


        while(stackbox.firstChild){
            stackbox.removeChild(stackbox.firstChild); }  
        /* The refresh button iteratively removes the elements of the stack starting from the first child
        until there are no more elements left.*/   });