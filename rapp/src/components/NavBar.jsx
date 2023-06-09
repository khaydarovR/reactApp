import React from 'react';


function NavBar() {
    return ( 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Главная</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">О нас</a>
          </li>
      </ul>
      </div>
      </div>
      </nav>
     );
}

export default NavBar;