fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(products=>{
   let productListEl = document.getElementById("product-list")
   let productsList = ``
   for (let product of products){
       productsList +=  ` <div class="col-12 col-sm-6 col-md-4 col-lg-3">
       <div class="card" >
         <img src="${product.image}" class="card-img-top" alt="product image">
         <div class="card-body">
           <h5 class="card-title">${product.title}</h5>
           <p class-"card-price">$${product.price}</p>
           <p class="card-text">${product.description}</p>
           <a href="#" class="btn btn-primary">View product</a>
           </div>
         </div>
       </div>`
   }
   productListEl.innerHTML += productsList
})

            