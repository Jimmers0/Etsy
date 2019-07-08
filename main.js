function makeitem(item) {
    return `
    <div class="item">
    <a href="https://www.etsy.com/signin?ref=hdr&from_action=signin-header&from_page=https%3A%2F%2Fwww.etsy.com%2Fsearch"><i class="far fa-heart"></i></a>
    <a class="img" href="${item.url}">
    <img class="img1" src="${item.img}" alt="" />
    </a>
    <p  class="title">${item.title}</p>
    <p class="seller">${item.seller}</p>
    <p class="price">$${item.price}</p>
  
    
</div>
`
}

let htmlStr = ''
items.results.forEach(item => {
    htmlStr += makeitem({
        img: item.Images[0].url_fullxfull,
        title: item.title,
        seller: item.Shop.shop_name,
        price: item.price,
        url: item.url
    })
})

document.querySelector("#stuff").innerHTML = htmlStr