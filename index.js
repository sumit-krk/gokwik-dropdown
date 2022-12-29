let count=0;
    let count_1=0;
    let count_2=0;
    let parent_count=0;
    function parentClick() {
        if(parent_count==0){
            let parentDiv=document.getElementById('afterParentDiv');
            parentDiv.style.display = "block"
            parent_count++
        }
        else if(parent_count==1){
            let parentDiv=document.getElementById('afterParentDiv');
            parentDiv.style.display = "none"
            parent_count=0
        }
    }
    function handleClick(){
        if(count_1==1){
            handleClick_1();
        }
        if(count_2==1){
            handleClick_2();
        }
        if(count==0){
            let childDropDown=document.getElementById("childDropDown");
            childDropDown.style.display='block'
            count++;
        }
        else if(count==1){
            let childDropDown=document.getElementById("childDropDown");
            childDropDown.style.display='none'
            count=0;
        }
    }
    function handleClick_1(){
        if(count==1){
            handleClick() 
        }
        if(count_2==1){
            handleClick_2() 
        }
        if(count_1==0){
            let childDropDown=document.getElementById("childDropDown_1");
            childDropDown.style.display='block'
            count_1++;
        }
        else if(count_1==1){
            let childDropDown=document.getElementById("childDropDown_1");
            childDropDown.style.display='none'
            count_1=0;
        }
    }
    function handleClick_2(){
        if(count==1){
            handleClick() 
        }
        if(count_1==1){
            handleClick_1() 
        }
        if(count_2==0){
            let childDropDown=document.getElementById("childDropDown_2");
            childDropDown.style.display='block'
            count_2++;
        }
        else if(count_2==1){
            let childDropDown=document.getElementById("childDropDown_2");
            childDropDown.style.display='none'
            count_2=0;
        }
    }