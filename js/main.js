let goods = [
    {brand: 'Asus', category: 'notebooks', price: '28000'},
    {brand: 'Xiaomi', category: 'phone', price: '10000'},
    {brand: 'Apple', category: 'phone', price: '20000'},
    {brand: 'Samsung', category: 'tablet', price: '15000'},
    {brand: 'Huawei', category: 'wifi-router', price: '10000'},
    {brand: 'Asus', category: 'notebooks', price: '25000'},
];


// ========= task1 ========

function sortByBrand () {
    goods.sort(function(a, b,) {
        if (a.brand > b.brand) return 1;
        if (a.brand < b.brand) return -1;
        if (a.brand == b.brand) return 0;
    });
};
   
sortByBrand(goods);
console.log(goods);


// function sortByCategory () {
//     goods.sort(function(a, b,) {
//         if (a.category > b.category) return 1;
//         if (a.category < b.category) return -1;
//         if (a.category == b.category) return 0;
//     });
// };

// sortByCategory(goods);
// console.log(goods);

// function sortByPrice () {
//     goods.sort(function(a, b,) {
//         if (a.price > b.price) return 1;
//         if (a.price < b.price) return -1;
//         if (a.price == b.price) return 0;
//     });
// };
    
// sortByPrice(goods);
// console.log(goods);



// ========= task2 ========

// let filterGood = goodFilter(goods, function(item){
//     return item.category == 'phone'; 
// });

// function goodFilter(arr, callback) {
//     let copyArr = arr.slice();
//     let filterArr = [];
//     let index = copyArr.findIndex(function(item) {
//         return callback (item);
//     });

//     while(index != -1) {
//         filterArr.push(copyArr[index]);
//         copyArr.splice(index, 1)

//         index = copyArr.findIndex(function(item) {
//             return callback (item);
//         });
//     }

//     return filterArr;
// }

// console.log(filterGood);


// ========= task3 ========

// let upperBrands = newGoodsUpperBrands(goods, function(item) {
//     return item.brand.toUpperCase();
// });

// function newGoodsUpperBrands(arr, callback) {
//     let arrHtml = [];
//     arr.forEach(function(item) {
//         arrHtml.push(callback(item));
//     });

//     return arrHtml;
// };

// console.log(upperBrands);
