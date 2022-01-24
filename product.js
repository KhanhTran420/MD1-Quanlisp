let products = ["Iphone 11","Iphone 11 pro max","Iphone 12 pro max","Samsung Galaxy"];


function showAllProduct(){
    let content = "<table border=\"\">\n" +
        "    <tr>\n" +
        "        <th>Tên Sản Phẩm</th>\n" +
        "        <th></th>\n" +
        "        <th></th>\n" +
        "    </tr>";
    // duyệt mảng
    for (let i = 0; i < products.length; i++) {
        let temp = " <tr>\n" +
            "            <td>"+products[i]+"</td>\n" +
            "            <td><button>Edit</button></td>\n" +
            "            <td><button>Xoa</button></td>\n" +
            "        </tr>";
        content+=temp;
    }

    content += "</table>";
    document.getElementById("content").innerHTML = content
}
showAllProduct();


function createNewProduct (){
    let name = document.getElementById("newProduct").value;
    products.push(name);
    showAllProduct();
}