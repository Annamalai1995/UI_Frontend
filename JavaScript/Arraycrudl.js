let FoodItem= new Array("Briyani", "Burger", "Pizza", "Sandwich")


let Adding = () => {
    let newvalue = document.getElementById('Food').value;

    FoodItem.push(newvalue);

    alert(newvalue + " this Food  is added successfully..!")
    Printall()
}

var Printall = () => {
    let temp = " "

    FoodItem.map((getting) =>
    {
        temp += " <tr><td><ul><li>" + getting + "</li></ul></td></tr>";
    })

    document.getElementById('list').innerHTML = 
    "<table><thead bgcolor='red'><tr><th>Food List</th></tr></thead><tbody bgcolor='pink' align='center'>" + temp + "</tbody></table>";
}

let Updating = () => {
    let updateindex = document.getElementById('Food').value;

    let newvalue = prompt(" please enter your update FOOD Item Name" +FoodItem[updateindex])

    FoodItem[updateindex] = newvalue;   //aray[2]=
    Printall();
}


var Removing = () => {
    let delete_value = document.getElementById('Food').value;

    FoodItem=FoodItem.filter((getting)=>
    {
        if(getting!==delete_value)   //Briyani!==Briyani
        {
            return getting;
        }

    })

    FoodItem.map((get) => {
        console.log(get)
    });

    Printall();
}


function Finding() {
    let searchingvalue = document.getElementById('Food').value;

    for (i = 0; i < FoodItem.length; i++) {
        if (FoodItem[i] === searchingvalue) {
            return i;
        }
    }
}

function Findfirst() {
    for (i = 0; i < FoodItem.length; i++) {
        alert(" FOOD ITEMS is :" + FoodItem[i]);
        break;
    }
}