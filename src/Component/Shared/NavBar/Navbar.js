import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-5" href="#">About <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-5" href="#">Dental Services<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-5 text-white" href="#">Reviews <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-5 text-white" href="#">Blog<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mr-5 text-white" href="#">Contact us<span class="sr-only">(current)</span></a>
      </li>
    </ul>
  
  </div>
</nav>
    );
};

export default Navbar;