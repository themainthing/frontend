import React from "react";
function Header(){

    return(
        <nav class="navbar bg-primary" data-bs-theme="dark">
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary"> 
        <nav>
          <ul>
         <li><Link to="/AddTime" className="button">Add time</Link></li>
         </ul>
        </nav>
        */}
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Time-Tracker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Go To Time-tracker</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Logout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

);
}

export default Header;