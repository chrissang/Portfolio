console.log('test.js ran');
console.log('aaaaaaaaa');
console.log('aaaaaaaaa');
console.log('aaaaaaaaa');
console.log('aaaaaaaaa');
console.log('aaaaaaaaa');
console.log('aaaaaaaaa');
>>>>>>> f40a009... added aaaaa
//sections:[home,enterprise,entertainment,kids,marketing]
var section = "home";
var sectionObj = new Object();

sectionObj.section = 'home';
sectionObj.boxColor = '';

console.log(sectionObj);
function boxAnimation(boxColor){
    if (boxColor == 'orange') {
        //adding boxColor and section to sectionObj
        sectionObj.section = 'enterprise';
        sectionObj.boxColor = boxColor;
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInOrangeBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";

        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("enterpriseView").style.display="block";
        },1200);
    }
    else if (boxColor == 'lightBlue') {
        //adding boxColor and section to sectionObj
        sectionObj.section = 'entertainment';
        sectionObj.boxColor = boxColor;
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInLightBlueBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("entertainmentView").style.display="block";
        },1200);
    }
    else if (boxColor == 'purple') {
        //adding boxColor and section to sectionObj
        sectionObj.section = 'kids';
        sectionObj.boxColor = boxColor;
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("kidsView").style.display="block";
        },1200);
    }
    else if (boxColor == 'blue') {
        //adding boxColor and section to sectionObj
        sectionObj.section = 'marketing';
        sectionObj.boxColor = boxColor;
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInBlueBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("marketingView").style.display="block";
        },1200);
    }
    else if (boxColor == 'red') {
        //adding boxColor and section to sectionObj
        sectionObj.section = 'content';
        sectionObj.boxColor = boxColor;
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInRedBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("contactView").style.display="block";
        },1200);
    };
}

function homeLink() {
    if (sectionObj.section == 'home') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );
    }
    else if (sectionObj.section == 'enterprise') {
        console.log('home enterprise');
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'home';
        sectionObj.boxColor = '';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("enterpriseView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("columnDiv").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'entertainment') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'home';
        sectionObj.boxColor = '';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("entertainmentView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("columnDiv").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'kids') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'home';
        sectionObj.boxColor = '';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("kidsView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("columnDiv").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'marketing') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'home';
        sectionObj.boxColor = '';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("marketingView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("columnDiv").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'content') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'home';
        sectionObj.boxColor = '';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("contactView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("columnDiv").style.display="block";
        },1200);
    };
}
function enterpriseLink() {
    if (sectionObj.section == 'home') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'enterprise';
        sectionObj.boxColor = 'orange';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("enterpriseView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'enterprise') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );
    }
    else if (sectionObj.section == 'entertainment') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'enterprise';
        sectionObj.boxColor = 'orange';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("entertainmentView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("enterpriseView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'kids') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'enterprise';
        sectionObj.boxColor = 'orange';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("kidsView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("enterpriseView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'marketing') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'enterprise';
        sectionObj.boxColor = 'orange';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("marketingView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("enterpriseView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'content') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'enterprise';
        sectionObj.boxColor = 'orange';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("contactView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("enterpriseView").style.display="block";
        },1200);
    };
}
function entertainmentLink() {
    if (sectionObj.section == 'home') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'entertainment';
        sectionObj.boxColor = 'lightBlue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("entertainmentView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'entertainment') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );
    }
    else if (sectionObj.section == 'enterprise') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'entertainment';
        sectionObj.boxColor = 'lightBlue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("enterpriseView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("entertainmentView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'kids') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'entertainment';
        sectionObj.boxColor = 'lightBlue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("kidsView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("entertainmentView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'marketing') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'entertainment';
        sectionObj.boxColor = 'lightBlue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("marketingView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("entertainmentView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'content') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'entertainment';
        sectionObj.boxColor = 'lightBlue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("contactView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("entertainmentView").style.display="block";
        },1200);
    };
}
function kidsLink() {
    if (sectionObj.section == 'home') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'kids';
        sectionObj.boxColor = 'purple';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("kidsView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'kids') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );
    }
    else if (sectionObj.section == 'enterprise') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'kids';
        sectionObj.boxColor = 'purple';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("enterpriseView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("kidsView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'entertainment') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'kids';
        sectionObj.boxColor = 'purple';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("entertainmentView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("kidsView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'marketing') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'kids';
        sectionObj.boxColor = 'purple';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("marketingView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("kidsView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'content') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'kids';
        sectionObj.boxColor = 'purple';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("contactView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("kidsView").style.display="block";
        },1200);
    };
}
function marketingLink() {
    if (sectionObj.section == 'home') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'marketing';
        sectionObj.boxColor = 'blue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("marketingView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'marketing') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );
    }
    else if (sectionObj.section == 'enterprise') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'marketing';
        sectionObj.boxColor = 'blue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("enterpriseView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("marketingView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'entertainment') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'marketing';
        sectionObj.boxColor = 'blue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("entertainmentView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("marketingView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'kids') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'marketing';
        sectionObj.boxColor = 'blue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("kidsView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("marketingView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'content') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'marketing';
        sectionObj.boxColor = 'blue';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("contactView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("marketingView").style.display="block";
        },1200);
    };
}
function contactLink() {
    if (sectionObj.section == 'home') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'content';
        sectionObj.boxColor = 'red';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("columnDiv").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("contactView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'content') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );
    }
    else if (sectionObj.section == 'enterprise') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'content';
        sectionObj.boxColor = 'red';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("enterpriseView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("contactView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'entertainment') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'content';
        sectionObj.boxColor = 'red';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("entertainmentView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("contactView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'kids') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'content';
        sectionObj.boxColor = 'red';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("kidsView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("contactView").style.display="block";
        },1200);
    }
    else if (sectionObj.section == 'marketing') {
        var navContainer = document.getElementById( 'st-container' );
        console.log(navContainer);
        classie.remove( navContainer, 'st-menu-open' );

        sectionObj.section = 'content';
        sectionObj.boxColor = 'red';
        console.log(sectionObj);

        document.getElementById("demo").className += " slideInPurpleBox";
        setTimeout(function(){
            document.getElementById("marketingView").style.display="none";
        },1000);
        setTimeout(function(){
            document.getElementById("demo").className = "box";
            document.getElementById("contactView").style.display="block";
        },1200);
    };
}

function testing() {
    console.log('FTS');
    // $('#enterpriseView').scrollTop(0);

}
