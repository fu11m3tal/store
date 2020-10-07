class Product {
    constructor(name, store, highlight, price, quantity, images) {
        this.name = name;
        this.store = store;
        this.highlight = highlight;
        this.price = price;
        this.quantity = quantity;
        this.image = images
    }
}


var names = ["Chassis Kit", "Sport Kit", "Defender", "Mercedes-Benz G 6x6"]
var store = "https://traxxas.com/";
var highlights = [
    ["Traxxas TRX-4 Sport 1/10 Scale Trail Rock Crawler Assembly Kit (TRA82010-4)"], 
    ["POWERFUL ENGINE: Outfitted with a powerful V8 engine, dynamic 4WD system, and military-grade portal axles", "ALL TERRAIN: Features portal axles, a high/low transmission, and locking differentials for superior all-terrain capability", "DETAILED BODY: Highly detailed body with unique wheels and tires make this truck a fitting tribute to the legendary original", "RADIO SYSTEM: TQi radio system features exclusive cruise control for long distance treks and a multi-function knob to fine tune it faster or slower"], 
    ["Innovative portal axles provide huge ground clearance and virtually eliminate chassis torque twist",
    "Lock differentials and operate the high/low range transmission remotely from the transmitter",
    "XL-5 HV ESC and powerful 21T Titan 550 motor accept 6 or 7-cell NiMH or 2 or 3-cell LiPo batteries (sold separately)",
    "Waterproof electronics allow you to drive the TRX-4 in the worst conditions",
    "Highly detailed Land Rover Defender body with functional accessories and spare tire. Refer user",], 
    ["REPLICA: Mercedes-Benz 500 4x4 replica takes you off road in style with its brilliant metallic paint and tinted windows", "POWERFUL ENGINE: Outfitted with a powerful V8 engine, dynamic 4WD system, and military-grade portal axles", "ALL TERRAIN: Features portal axles, a high/low transmission, and locking differentials for superior all-terrain capability", "DETAILED BODY: Highly detailed body with unique wheels and tires make this truck a fitting tribute to the legendary original", "RADIO SYSTEM: TQi radio system features exclusive cruise control for long distance treks and a multi-function knob to fine tune it faster or slower"], 
    ["WATERPROOF: Electronic vehicle with a waterproof build loaded with a strong vision, innovation, and spirit to take on any terrain", "RADICAL DESIGN: 6-wheel drive, extreme approach angles, and high ground clearance at 3.14 inches will overcome rough inclines", "FACTORY-EQUIPPED LIGHTING: Brilliant pre-installed LED light kit keeps the path lit to take on the darkest night treks", "SUPERIOR SYSTEM: Fine-tune speed with the multi-function knob or place on cruise control for long-distance adventures", "COMPATIBLE: Pairs well with 1/16 scale Traxxas batteries, AA alkaline batteries, and the Traxxas EZ-Peak Live charger"]
];

var prices = [395.99, 299.99, 469.99, 629.99];
var quantities = [1, 3, 4, 6]
var images = [["https://traxxas.com/sites/default/files/82016-4-TRX4-UnassembledKit-3qtr-IMG_1592.jpg"], ["https://images-na.ssl-images-amazon.com/images/I/71AlPchiJYL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71BIKiVnyBL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71dWYaBsFtL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61qdpPA0uXL._AC_SL1500_.jpg"], ["https://images-na.ssl-images-amazon.com/images/I/71nIwoXFsSL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61v4FIZgbUL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71aIyUjTFdL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71aIyUjTFdL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71Xx2tqHIqL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/7149J6Ics0L._AC_SL1500_.jpg"], ["https://images-na.ssl-images-amazon.com/images/I/61c9zqL9YSL._AC_SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81A-qdkU8gL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71rU%2BsfL-QL._AC_SL1500_.jpg"], ["https://images-na.ssl-images-amazon.com/images/I/61p-MrqvTHL._AC_SL1000_.jpg"]]

var products = [];
names.forEach((name, i) => {
    products.push(new Product(names[i], store, highlights[i], prices[i], quantities[i], images[i]))
})

export default products;