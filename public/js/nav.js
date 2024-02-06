const createNav = () => {
    let nav = document.querySelector('.navbar')
    nav.innerHTML = `
    <div class="nav">
    <img src="img/dark-logo.png" class="brand-logo" alt="" />
    <div class="nav-items">
      <div class="search">
        <input
          type="text"
          class="search-box"
          placeholder="جست و جو کنید"
          dir="rtl"
        />
        <button class="search-btn">Search</button>
        <a href="#"><img src="./img/user.png" alt="" /></a>
        <a href="#"><img src="./img/cart.png" alt="" /></a>
      </div>
    </div>
  </div>
  <ul class="links-container" dir="rtl">
    <li class="link-item"><a href="#" class="link">خانه</a></li>
    <li class="link-item"><a href="#" class="link">زنانه</a></li>
    <li class="link-item"><a href="#" class="link">مردانه</a></li>
    <li class="link-item"><a href="#" class="link">بچگانه</a></li>
    <li class="link-item"><a href="#" class="link">اکسسوری</a></li>
  </ul>
    `;
}

createNav();