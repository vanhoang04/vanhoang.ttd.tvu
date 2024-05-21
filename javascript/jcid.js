document.addEventListener('DOMContentLoaded', function() {
    var images = [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-5-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541860',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434'
        // Thêm các URL ảnh khác vào đây
    ];

    var index = 0;
    var slideshow = document.getElementById('slideshow');

    function changeImage() {
        slideshow.classList.add('hidden');
        index = (index + 1) % images.length;
        setTimeout(function() {
            slideshow.src = images[index];
            slideshow.classList.remove('hidden');
        }, 1000);
    }

    setInterval(changeImage, 2900); // Thay đổi ảnh sau mỗi 2,9s
});
//thanh bar
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
//menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//xoa menu khi cuon xong
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//chính sách popup
function openPopup(popupId, contentId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(contentId).innerHTML = data;
            document.getElementById(popupId).style.display = 'flex';
        });
}

function openPrivacyPolicyPopup() {
    openPopup('privacyPolicyPopup', 'privacyPolicyContent', 'Dulieu/quyenriengtu.html');
}

function openRefundPolicyPopup() {
    openPopup('refundPolicyPopup', 'refundPolicyContent', 'Dulieu/hoantien.html');
}

function openTermsOfServicePopup() {
    openPopup('termsOfServicePopup', 'termsOfServiceContent', 'Dulieu/dieukhoansudung.html');
}
function openDeliveryPaymentPolicyPopup() {
    openPopup('deliveryPaymentPolicyPopup', 'deliveryPaymentPolicyContent', 'Dulieu/giaohangthanhtoan.html');
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}
//gio hang

 let cartItems = []; 

        function addToCart(productId) {
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            if (cartItems.includes(productId)) {

                alert("Sản phẩm đã có trong giỏ hàng!");
            } else {
                cartItems.push(productId);
                updateCartCount();
            }
        }

        function updateCartCount() {
            const cartCount = cartItems.length;
            document.getElementById("cartCount").innerText = cartCount;
        }

//thanh toán
let cart = [];
let cartCountElement = document.getElementById("cartCount");

function addToCart(productName, productPrice, productImage) {
    let product = cart.find(item => item.name === productName);
    if (product) {
        alert("Sản phẩm đã có trong giỏ hàng. Bạn có thể tăng số lượng sản phẩm trong phần thanh toán.");
    } else {
        cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
        updateCartCount();
    }
}

function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

function openPaymentPopup(event) {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("paymentContent").innerHTML = this.responseText;
            document.getElementById("paymentOverlay").style.display = "flex";
            document.body.classList.add("no-scroll");
            loadCartItems();
        }
    };
    xhttp.open("GET", 'Dulieu/trangthanhtoan.html', true);
    xhttp.send();
}

function closePaymentPopup() {
    document.getElementById("paymentOverlay").style.display = "none";
    document.body.classList.remove("no-scroll");
}

function loadCartItems() {
    let cartItemsElement = document.getElementById("cartItems");
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        cartItemsElement.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <p>${item.name}</p>
                    <p>${item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                </div>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <input type="text" value="${item.quantity}" readonly>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>`;
        total += item.price * item.quantity;
    });

    cartItemsElement.innerHTML += `<div class="cart-total">Tổng: ${total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>`;
}

function updateQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1);
    }
    loadCartItems();
    updateCartCount();
}

//goi y tim kiem
document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { name: 'Iphone 15 Pro Max', elementId: 'iphone15ProMax' },
        { name: 'Điện thoại iPhone 13 128GB', elementId: 'iphone13' },
        { name: 'Iphone 15 Plus', elementId: 'iphone15Plus' },
        { name: 'Iphone 11', elementId: 'iphone11' },
        { name: 'Samsung Galaxy S23 Ultra 5G', elementId: 'samsungS23Ultra' },
        { name: 'Xiaomi Redmi 12 4GB', elementId: 'xiaomiRedmi12' },
        { name: 'OPPO Reno11 F 5G', elementId: 'oppoReno11F' },
        { name: 'OPPO A58 8GB', elementId: 'oppoA58' },
        { name: 'Xiaomi 14 5G 512GB', elementId: 'xiaomi14' },
        { name: 'Xiaomi 13T 5G 8GB', elementId: 'xiaomi13T' },
        { name: 'Sạc dự phòng AVA+ JP299', elementId: 'avaJP299' },
        { name: 'Tai nghe Bluetooth AVA+ PT62', elementId: 'avaPT62' },
        { name: 'Loa Bluetooth Sony SRS-XB100', elementId: 'sonySRSXB100' },
        { name: 'Bộ Adapter sạc PD 45W Samsung', elementId: 'samsungAdapter45W' }
    ];
    
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestions');

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        suggestionsContainer.innerHTML = '';

        if (query) {
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
            filteredProducts.forEach(product => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = product.name;
                suggestionItem.addEventListener('click', () => {
                    const productElement = document.getElementById(product.elementId);
                    if (productElement) {
                        const windowHeight = window.innerHeight;
                        const productHeight = productElement.offsetHeight;
                        const top = productElement.getBoundingClientRect().top + window.scrollY - (windowHeight - productHeight) / 2;
                        window.scrollTo({ top: top, behavior: 'smooth' });
                    }
                    searchInput.value = product.name;
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.style.display = 'none';
                });
                suggestionsContainer.appendChild(suggestionItem);
            });

            suggestionsContainer.style.display = filteredProducts.length ? 'block' : 'none';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });
});

//THEO doI
var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName('close')[0];
        span.onclick = function() {
            modal.style.display = 'none';
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        document.getElementById('newsletterForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var email = document.getElementById('email').value;
            document.getElementById('modalMessage').textContent = 'Cảm ơn bạn đã theo dõi! Thông tin ưu đãi sẽ được gửi về email của bạn: ' + email;
            modal.style.display = 'block';
            event.target.reset();
        });
//chi tiet san pham


