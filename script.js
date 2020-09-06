let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;
var $select= $('#food_menu');
$("document").ready(function(){
    $.get(url,function(data, status){
        if (status == "success"){
            menu_items = data.menu_items;
            for (const key in data.menu_items) {
                let opt = document.createElement("option");
                opt.textContent = data.menu_items[key].name;
                opt.value = key; 
                document.querySelector('#food_menu').appendChild(opt);
            }
        }
       
    });
    
document.querySelector("#food_menu").addEventListener("change",showdetails);

function showdetails(e){
    let index = e.target.value;
    
    if(menu_items != null){
        let x = menu_items[index];
        let pricesmall;
        
        if(x.price_small != null){
            pricesmall = x.price_small;
            
        }
        else{
            pricesmall = "NA";
        }
		
        let descrp = x.description;
        if(descrp == ""){
            descrp = "Description not available";
        }
        document.querySelector("#Name").textContent = x.name;
        document.querySelector("#id").textContent = x.id;
        document.querySelector("#Short_Name").textContent = x.short_name;
        document.querySelector("#Description").textContent = x.description;
        document.querySelector("#Price_Small").textContent = pricesmall;
        document.querySelector("#Price_Large").textContent = x.price_large;
		document.querySelector("#Small_Portion_Name").textContent = x.small_portion_name;
		document.querySelector("#Large_Portion_Name").textContent = x.large_portion_name;
        document.getElementById("food_table").style.display = "block";
    }

    
}
});

