import Alpine from 'alpinejs'
 
window.Alpine = Alpine
Alpine.data('products', () => ({
    product : [],
    name : " hcndscjkhfjhdskjhfkdskjdhkjdhkjsdhfkjsahkdjshfkjhdsavi",
    async init(){
        const x = await fetch('https://jsonware.com/api/v1/json/c67ec089-ca18-463d-86db-c33804418016?dynamic=true')
        const data = await x.json();
        const {products} = data;
        this.product.push(products);
    }
})) 
Alpine.start()