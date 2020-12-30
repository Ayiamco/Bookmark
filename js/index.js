
//hide certain features on intial load
document.getElementById("features-speedy").style.display="none";
document.getElementById("features-easy").style.display="none";



//event listener for nav bar
document.getElementById("hamburger").addEventListener("click",(e)=>{
    let navLinks=document.getElementById("nav-links")
    console.log(e.target)
    if(navLinks.className==="hide-nav"){
        navLinks.className="show-nav"
    }
    else{
        navLinks.className="hide-nav"
    }

})



document.getElementsByClassName("features-link-container")[0].addEventListener("click",(e)=>{
    const featureLinksId=["features-link-simple","features-link-speedy","features-link-easy"]
    const featureObj={
        "features-link-simple":"features-simple",
        "features-link-easy":"features-easy",
        "features-link-speedy":"features-speedy"
    }

    featureLinksId.map((item,index)=>{
        if(item === e.target.id || e.target.className.includes(item)) {
            document.getElementById(featureObj[item]).style.display="flex"
            document.getElementById(item).id="features-link-focus"
            
            
            return;
        }
       
        document.getElementById(featureObj[item]).style.display="none"
        document.getElementsByClassName("features-link")[index].id=featureLinksId[index]
       return;
    })
})
    
document.getElementById("FAQ1").addEventListener("click",DropDown)
document.getElementById("FAQ2").addEventListener("click",DropDown)
document.getElementById("FAQ3").addEventListener("click",DropDown)
document.getElementById("FAQ4").addEventListener("click",DropDown)


function DropDown(e){
    const dropDownObj={
        "FAQ1":"FAQ-answer1",
        "FAQ2":"FAQ-answer2",
        "FAQ3":"FAQ-answer3",
        "FAQ4":"FAQ-answer4",
    }
    const ele= document.getElementById(dropDownObj[e.target.id])
    if(ele.style.display===""){
        ele.style.display="block";
        return;
    }
    ele.style.display=""
    return;
    
}
    
