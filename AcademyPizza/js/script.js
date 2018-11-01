var subSize = 14;
var subMeat = 0;
var subCheese = 0;
var subCrust = 0;
var subSauce = 0;
var subVeggies = 0;
var sumTotal = 14;

function setTotal() {
    sumTotal = subSize + subMeat + subCheese + subCrust + subSauce + subVeggies;
    document.getElementById('finalTotal').innerHTML = "$" + sumTotal + ".00";
}

function setSize() {
    sizeObject = document.getElementsByName('size');
    selection = "";
    for(var i=0;i<sizeObject.length;i++){
        if (sizeObject[i].checked == true){
            selection = sizeObject[i].value;
        }
    }
    switch(selection) {
        case 'Personal':
            subSize = 6;
            document.getElementById('sizeTotal').innerHTML = "+ $" + subSize;
            break;
        case 'Medium':
            subSize = 10;
            document.getElementById('sizeTotal').innerHTML = "+ $" + subSize;
            break;
        case 'Large':
            subSize = 14;
            document.getElementById('sizeTotal').innerHTML = "+ $" + subSize;
            break;
        case 'Extra Large':
            subSize = 16;
            document.getElementById('sizeTotal').innerHTML = "+ $" + subSize;
            break;
    }
    document.getElementById('sizeA').innerHTML = selection + " Pizza";
    document.getElementById('sizeB').innerHTML = "$" + subSize + ".00";
    setTotal();
}


function setMeat() {
    meatObject = document.getElementsByName('meat');
    count = 0;
    var temp = new Array();
    var i;
    var txtMeat;
    for(i=0;i<meatObject.length;i++){
        if (meatObject[i].checked == true){
            count++;
            temp.push(meatObject[i].value);
        }
    }

    txtMeat = temp.join(', ');

    if(count==0){
        subMeat = 0;
        document.getElementById('meatTotal').innerHTML = "+ $" + subMeat;
        document.getElementById('meatA').innerHTML = "<em>none</em>";
    } else {
        subMeat = count-1;
        document.getElementById('meatTotal').innerHTML = "+ $" + subMeat;
        document.getElementById('meatA').innerHTML = txtMeat;
    }



    
    document.getElementById('meatB').innerHTML = "$" + subMeat + ".00";
    setTotal();
}


function setCheese() {
    cheeseObject = document.getElementsByName('cheese');
    selection = "";
    for(var i=0;i<cheeseObject.length;i++){
        if (cheeseObject[i].checked == true){
            selection = cheeseObject[i].value;
        }
    }
    switch(selection) {
        case 'Extra Cheese':
            subCheese = 3;
            document.getElementById('cheeseTotal').innerHTML = "+ $" + subCheese;
            break;
        default:
            subCheese = 0;
            document.getElementById('cheeseTotal').innerHTML = "+ $" + subCheese;
            break;

    }
    document.getElementById('cheeseA').innerHTML = selection;
    document.getElementById('cheeseB').innerHTML = "$" + subCheese + ".00";
    setTotal();
}



function setCrust() {
    crustObject = document.getElementsByName('crust');
    selection = "";
    for(var i=0;i<crustObject.length;i++){
        if (crustObject[i].checked == true){
            selection = crustObject[i].value;
        }
    }
    switch(selection) {
        case 'Cheese Stuffed':
            subCrust = 3;
            document.getElementById('crustTotal').innerHTML = "+ $" + subCrust;
            break;
        default:
            subCrust = 0;
            document.getElementById('crustTotal').innerHTML = "+ $" + subCrust;
            break;

    }
    document.getElementById('crustA').innerHTML = selection + " Crust";
    document.getElementById('crustB').innerHTML = "$" + subCrust + ".00";
    setTotal();
}

function setSauce() {
    sauceObject = document.getElementsByName('sauce');
    selection = "";
    for(var i=0;i<sauceObject.length;i++){
        if (sauceObject[i].checked == true){
            selection = sauceObject[i].value;
        }
    }  
    document.getElementById('sauceA').innerHTML = selection + " Sauce";
}

function setVeggies() {
    veggiesObject = document.getElementsByName('veggies');
    count = 0;
    var temp = new Array();
    var i;
    var txtVeggies;
    for(i=0;i<veggiesObject.length;i++){
        if (veggiesObject[i].checked == true){
            count++;
            temp.push(veggiesObject[i].value);
        }
    }

    txtVeggies = temp.join(', ');

    if(count==0){
        subVeggies = 0;
        document.getElementById('veggiesTotal').innerHTML = "+ $" + subVeggies;
        document.getElementById('veggiesA').innerHTML = "<em>none</em>";
    } else {
        subVeggies = count - 1;
        document.getElementById('veggiesTotal').innerHTML = "+ $" + subVeggies;
        document.getElementById('veggiesA').innerHTML = txtVeggies;
    }

    
    document.getElementById('veggiesB').innerHTML = "$" + subVeggies + ".00";
    setTotal();
}

function startOver() {
    document.getElementById('mainForm').reset();
    document.getElementById('receipt').style.opacity = 0;
    subSize = 14;
    subMeat = 0;
    subCheese = 0;
    subCrust = 0;
    subSauce = 0;
    subVeggies = 0;
    sumTotal = 14;
    setSize();
    setMeat();
    setCheese();
    setCrust();
    setSauce();
    setVeggies();

}

function order() {
    document.getElementById('receipt').style.opacity = 1;
}


