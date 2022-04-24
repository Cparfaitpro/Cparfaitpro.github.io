function getProject()
{
    variable=document.getElementById("Project").value;
    switch(variable)
    {
        case "projet1" :
            document.getElementById("Project1").style.display="block";
            document.getElementById("Project2").style.display="none";
            document.getElementById("Project3").style.display="none";
            document.getElementById("Project4").style.display="none";
            document.getElementById("Project5").style.display="none";
            document.getElementById("Project6").style.display="none";
            document.getElementById("Project7").style.display="none";
            break;
        case "projet2" :
            document.getElementById("Project1").style.display="none";
            document.getElementById("Project2").style.display="block";
            document.getElementById("Project3").style.display="none";
            document.getElementById("Project4").style.display="none";
            document.getElementById("Project5").style.display="none";
            document.getElementById("Project6").style.display="none";
            document.getElementById("Project7").style.display="none";
            break;
            
        case "projet3" :
            document.getElementById("Project1").style.display="none";
            document.getElementById("Project2").style.display="none";
            document.getElementById("Project3").style.display="block";
            document.getElementById("Project4").style.display="none";
            document.getElementById("Project5").style.display="none";
            document.getElementById("Project6").style.display="none";
            document.getElementById("Project7").style.display="none";
            break;
        case "projet4" :
            document.getElementById("Project1").style.display="none";
            document.getElementById("Project2").style.display="none";
            document.getElementById("Project3").style.display="none";
            document.getElementById("Project4").style.display="block";
            document.getElementById("Project5").style.display="none";
            document.getElementById("Project6").style.display="none";
            document.getElementById("Project7").style.display="none";
            break;
        case "projet5" :
            document.getElementById("Project1").style.display="none";
            document.getElementById("Project2").style.display="none";
            document.getElementById("Project3").style.display="none";
            document.getElementById("Project4").style.display="none";
            document.getElementById("Project5").style.display="block";
            document.getElementById("Project6").style.display="none";
            document.getElementById("Project7").style.display="none";
            break;
        case "projet6" :
            document.getElementById("Project1").style.display="none";
            document.getElementById("Project2").style.display="none";
            document.getElementById("Project3").style.display="none";
            document.getElementById("Project4").style.display="none";
            document.getElementById("Project5").style.display="none";
            document.getElementById("Project6").style.display="block";
            document.getElementById("Project7").style.display="none";
            break;
        case "projet7" :
            document.getElementById("Project1").style.display="none";
            document.getElementById("Project2").style.display="none";
            document.getElementById("Project3").style.display="none";
            document.getElementById("Project4").style.display="none";
            document.getElementById("Project5").style.display="none";
            document.getElementById("Project6").style.display="none";
            document.getElementById("Project7").style.display="block";
            break;
    }
}