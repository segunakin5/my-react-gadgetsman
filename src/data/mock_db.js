const productList = [
    {
        productId :'',
        productName : '',
        productPrice :'',
        productDescription:'',  
        productImage:''

    },
    {
        productId :'',
        productName : '',
        productPrice :'',
        productDescription:'',  
        productImage:''

    },
    {
        productId :'',
        productName : '',
        productPrice :'',
        productDescription:'',  
        productImage:''

    },
    {
        productId :'',
        productName : '',
        productPrice :'',
        productDescription:'',  
        productImage:''

    },
    {
        productId :'',
        productName : '',
        productPrice :'',
        productDescription:'',  
        productImage:''

    }
] 



export function  getProductById(productId) {
    return productList.find(product => product.productId === productId)
}