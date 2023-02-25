const NavigationSidebar = () => {
return(`
    <div class="list-group">
    <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
    <li class="list-group-item">
                <div class="row">
                <i class=" col-2 me-0.1 fa fa-home"></i><span class=" col-5 d-none d-xl-block">Home</span>
                </div>
            </li>
            <li class="list-group-item active">
                <div class="row">
                <i class="col-2 me-2 fab fa-hashtag"></i><span class="col-5 d-none d-xl-block" >Explore</span>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                <i class="me-2 col-2 fa fa-bell"></i><span class="col-5 d-none d-xl-block">Notification</span>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                <i class="col-2 me-2 fa fa-envelope"></i><span class="col-5 d-none d-xl-block">Messages</span>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                <i class="col-2 me-2 fa fa-bookmark"></i><span class="col-5 d-none d-xl-block">Bookmarks</span>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                <i class="col-2 me-2 fa fa-list"></i><span class="col-5 d-none d-xl-block">Lists</span>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                <i class="col-2 me-2 fa fa-user"></i><span class="col-5 d-none d-xl-block">Profile</span>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                <i class="col-2 me-2 fa fa-ellipsis"></i><span class="col-5 d-none d-xl-block">More</span>
                </div>
            </li>
    </div>
    <div class="d-grid mt-2">
    <a href="#" class="btn btn-primary btn-block rounded-pill">Tweet</a>
    </div>`);
}

export default NavigationSidebar;