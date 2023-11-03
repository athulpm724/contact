import React from "react";



function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand fs-1 ms-5" href="#">

          <i class="fa-regular fa-address-book fa-sm"></i>
            CONTACT CARDS
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
           
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;