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

var body = [
    "INJORA RC Car Body Shell 313mm Wheelbase Car Shell KIT D110 Defender Body Shell for 1/10 RC Crawler Traxxas TRX4 Axial SCX10 90046 (Orange)",
    "https://www.amazon.com/stores/INJORA/page/6E25EC4C-B068-4AC8-AFCE-9A2B9506F53B?ref_=ast_bln",
    ["Made of high quality hard plastic - ABS.", "Easy and convenient to install, enjoy the fun to assemble.", "Novel design, movable doors and engine hood make your car more attractive.", "Include light cups, interior cab, grille, fender, clear window, wiper, rearview mirror, door handle.", "Suit for 1:10 RC Crawler Traxxas TRX4 Axial SCX10 90046"],
    139.99,
    3,
    ["https://images-na.ssl-images-amazon.com/images/I/61ZR8vBARFL._AC_SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71QEo3sd1zL._AC_SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61-PJB6G84L._AC_SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/718enZL0YkL._AC_SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61VMe3BoPQL._AC_SL1000_.jpg"],
];
var thing = new Product(...body)
console.log(thing)