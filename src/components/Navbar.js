function Navbar() {
    return (
        <nav class="navbar navbar-expand-md">

        <div class="container-xl  btn btn-outline-info">

            <a href="#" class="navbar-brand">Home</a>

              <button class="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#links">
                <span class="navbar-toggler-icon"></span>
              </button>

            <div id="links" class="collapse navbar-collapse justify-content-end" >
                <ul class="navbar-nav ">
                    <li class="nav-item "><a href="#" class="nav-link">Book Appointment</a></li>
                    <li class="nav-item "><a href="#" class="nav-link">Dashboard</a></li>
                    <li class="nav-item "><a href="#" class="nav-link">Contact</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;