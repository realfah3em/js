class Transaction{

    constructor(id, timestamp, price, category, itemName) {
        this.id = id;
        this.timestamp = timestamp;
        this.price = price;
        this.category = category;
        this.itemName = itemName;
    }
}

const t1 = {
    id: 1,
    price: 20.0,
    quantity: 350,
    category: "fruits",
    item: "guava"
};

const t2 = {
    id: 2,
    price: 30.0,
    quantity: 400,
    category: "veggies",
    item: "broccoli"
};

const t3 = {
    id: 3,
    price: 40.0,
    quantity: 300,
    category: "junk",
    item: "noodles"
};

const t4 = {
    id: 4,
    price: 50.0,
    quantity: 450,
    category: "veggies",
    item: "zucchini"
};

const t5 = {
    id: 5,
    price: 50.0,
    quantity: 250,
    category: "fruits",
    item: "mandarin"
};


class newObject{


    constructor() {
    }
}

let v0 = {
}
const transactionArray = [t1, t2, t3, t4, t5];

// function calculateTotalSpentByCategory(transactionArray){
//     console.log("called")
//     console.log("transactionArray[category] ", transactionArray.category)
//     if (transactionArray["category"] == "fruits"){
//         console.log(transactionArray.id +" " + transactionArray.price)
//         n0 = transactionArray["category"] + transactionArray["price"]
//     }
//     if(transactionArray["category"] == "veggies"){
//         n1 = transactionArray["category"] + transactionArray["price"];
//     }
//
// }



function calculateTotalSpentByCategory(transactionArray){
    let total = 0
    for (let i = 0; i<transactionArray.length; i++){
        if (transactionArray[i].category == "fruits"){

            total += transactionArray[i].price
            console.log("true---")
            console.log("total price: ", total)
            // v0 = transactionArray.category + transactionArray.price;
            // return v0;
        }

    }

}
console.log(calculateTotalSpentByCategory(transactionArray));