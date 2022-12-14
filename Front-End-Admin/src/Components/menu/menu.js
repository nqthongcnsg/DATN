import React, { Component } from "react";
import {
  Link
}from "react-router-dom";
const Menu =()=>{
  return(
    <>
     <div className="theme-setting-wrapper">
<div id="settings-trigger"><i className="ti-settings"></i></div>
<div id="theme-settings" className="settings-panel">
  <i className="settings-close ti-close"></i>
  <p className="settings-heading">SIDEBAR SKINS</p>
  <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border me-3"></div>Light</div>
  <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border me-3"></div>Dark</div>
  <p className="settings-heading mt-2">HEADER SKINS</p>
  <div className="color-tiles mx-0 px-4">
    <div className="tiles success"></div>
    <div className="tiles warning"></div>
    <div className="tiles danger"></div>
    <div className="tiles info"></div>
    <div className="tiles dark"></div>
    <div className="tiles default"></div>
  </div>
</div>
</div>
<div id="right-sidebar" className="settings-panel">
<i className="settings-close ti-close"></i>
<ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
  </li>
</ul>
<div className="tab-content" id="setting-content">
  <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
    <div className="add-items d-flex px-3 mb-0">
      <form className="form w-100">
        <div className="form-group d-flex">
          <input type="text" className="form-control todo-list-input" placeholder="Add To-do"/>
          <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
        </div>
      </form>
    </div>
    <div className="list-wrapper px-3">
      <ul className="d-flex flex-column-reverse todo-list">
        <li>
          <div className="form-check">
            <label className="form-check-label">
              <input className="checkbox" type="checkbox"/>
              Team review meeting at 3.00 PM
            </label>
          </div>
          <i className="remove ti-close"></i>
        </li>
        <li>
          <div className="form-check">
            <label className="form-check-label">
              <input className="checkbox" type="checkbox"/>
              Prepare for presentation
            </label>
          </div>
          <i className="remove ti-close"></i>
        </li>
        <li>
          <div className="form-check">
            <label className="form-check-label">
              <input className="checkbox" type="checkbox"/>
              Resolve all the low priority tickets due today
            </label>
          </div>
          <i className="remove ti-close"></i>
        </li>
        <li className="completed">
          <div className="form-check">
            <label className="form-check-label">
              <input className="checkbox" type="checkbox" checked/>
              Schedule meeting for next week
            </label>
          </div>
          <i className="remove ti-close"></i>
        </li>
        <li className="completed">
          <div className="form-check">
            <label className="form-check-label">
              <input className="checkbox" type="checkbox" checked/>
              Project review
            </label>
          </div>
          <i className="remove ti-close"></i>
        </li>
      </ul>
    </div>
    <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
    <div className="events pt-4 px-3">
      <div className="wrapper d-flex mb-2">
        <i className="ti-control-record text-primary me-2"></i>
        <span>Feb 11 2018</span>
      </div>
      <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
      <p className="text-gray mb-0">The total number of sessions</p>
    </div>
    <div className="events pt-4 px-3">
      <div className="wrapper d-flex mb-2">
        <i className="ti-control-record text-primary me-2"></i>
        <span>Feb 7 2018</span>
      </div>
      <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
      <p className="text-gray mb-0 ">Call Sarah Graves</p>
    </div>
  </div>

  <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
    <div className="d-flex align-items-center justify-content-between border-bottom">
      <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
      <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See All</small>
    </div>
    <ul className="chat-list">
      <li className="list active">
        <div className="profile"><img src="images/faces/face1.jpg" alt="image"/><span className="online"></span></div>
        <div className="info">
          <p>Thomas Douglas</p>
          <p>Available</p>
        </div>
        <small className="text-muted my-auto">19 min</small>
      </li>
      <li className="list">
        <div className="profile"><img src="images/faces/face2.jpg" alt="image"/><span className="offline"></span></div>
        <div className="info">
          <div className="wrapper d-flex">
            <p>Catherine</p>
          </div>
          <p>Away</p>
        </div>
        <div className="badge badge-success badge-pill my-auto mx-2">4</div>
        <small className="text-muted my-auto">23 min</small>
      </li>
      <li className="list">
        <div className="profile"><img src="images/faces/face3.jpg" alt="image"/><span className="online"></span></div>
        <div className="info">
          <p>Daniel Russell</p>
          <p>Available</p>
        </div>
        <small className="text-muted my-auto">14 min</small>
      </li>
      <li className="list">
        <div className="profile"><img src="images/faces/face4.jpg" alt="image"/><span className="offline"></span></div>
        <div className="info">
          <p>James Richardson</p>
          <p>Away</p>
        </div>
        <small className="text-muted my-auto">2 min</small>
      </li>
      <li className="list">
        <div className="profile"><img src="images/faces/face5.jpg" alt="image"/><span className="online"></span></div>
        <div className="info">
          <p>Madeline Kennedy</p>
          <p>Available</p>
        </div>
        <small className="text-muted my-auto">5 min</small>
      </li>
      <li className="list">
        <div className="profile"><img src="images/faces/face6.jpg" alt="image"/><span className="online"></span></div>
        <div className="info">
          <p>Sarah Graves</p>
          <p>Available</p>
        </div>
        <small className="text-muted my-auto">47 min</small>
      </li>
    </ul>
  </div>

</div>
</div>
<nav className="sidebar sidebar-offcanvas" id="sidebar">
<ul className="nav">
  <li className="nav-item">
    <a className="nav-link" href="/">
      <i className="mdi mdi-grid-large menu-icon"></i>
      <span className="menu-title">Trang ch???</span>
    </a>
  </li>
  <li className="nav-item nav-category">Elements</li>
  {/* <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" href="/order" aria-expanded="false" aria-controls="ui-basic">
      <i className="menu-icon mdi mdi-floor-plan"></i>
      <span className="menu-title">Orders</span>
      <i className="menu-arrow"></i> 
    </a>
    <div className="collapse" id="ui-basic">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item"> <a className="nav-link" href="/order">List Orders</a></li>
        
      </ul>
    </div>
  </li> */}
   <li className="nav-item">
    <a className="nav-link" href="/order">
      <i className="mdi mdi-comment menu-icon"></i>
      <span className="menu-title">????n ?????t h??ng</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
      <i className="menu-icon mdi mdi-bank"></i>
      <span className="menu-title">Kho h??ng</span>
      <i className="menu-arrow"></i> 
    </a>
    <div className="collapse" id="ui-basic">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item"> <a className="nav-link" href="/warehouse">Danh s??ch s???n ph???m  kho</a></li>
        <li className="nav-item"><a className="nav-link" href="/addwarehouse">Nh???p kho</a></li>
      </ul>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/chat">
      <i className="mdi mdi-comment menu-icon"></i>
      <span className="menu-title">Chat</span>
    </a>
  </li>
  <li className="nav-item nav-category">D??? li???u</li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
      <i className="menu-icon mdi mdi-card-text-outline"></i>
      <span className="menu-title">S???n ph???m</span>
      <i className="menu-arrow"></i>
    </a>
    <div className="collapse" id="form-elements">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item"><a className="nav-link" href="/product">Danh s??ch s???n ph???m</a></li>
        <li className="nav-item"><a className="nav-link" href="/addProduct">Th??m s???n ph???m</a></li>
      </ul>
      
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
      <i className="menu-icon mdi mdi-city"></i>
      <span className="menu-title">Th????ng hi???u</span>
      <i className="menu-arrow"></i>
    </a>
    <div className="collapse" id="charts">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item"> <a className="nav-link" href="/brand">Danh s??ch th????ng hi???u</a></li>
        <li className="nav-item"> <a className="nav-link" href="/addbrand">Th??m th????ng hi???u</a></li>
      </ul>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
      <i className="menu-icon mdi mdi-table"></i>
      <span className="menu-title">Th??? lo???i</span>
      <i className="menu-arrow"></i>
    </a>
    <div className="collapse" id="tables">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item"> <a className="nav-link" href="/categories">Danh s??ch th??? lo???i</a></li>
        <li className="nav-item"> <a className="nav-link" href="addcategories">Th??m th??? lo???i</a></li>
      </ul>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
      <i className="menu-icon mdi mdi-layers-outline"></i>
      <span className="menu-title">M?? gi???m gi??</span>
      <i className="menu-arrow"></i>
    </a>
    <div className="collapse" id="icons">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item"> <a className="nav-link" href="/discount">Danh s??ch m??</a></li>
        <li className="nav-item"> <a className="nav-link" href="adddiscount">Th??m m??</a></li>
      </ul>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
      <i className="menu-icon mdi mdi-fan"></i>
      <span className="menu-title">Lo???i H??nh</span>
      <i className="menu-arrow"></i>
    </a>
    <div className="collapse" id="icons">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item"> <a className="nav-link" href="type">Danh s??ch</a></li>
        <li className="nav-item"> <a className="nav-link" href="addtype">Th??m</a></li>
      </ul>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
      <i className="menu-icon mdi mdi-ferry"></i>
      <span className="menu-title">Size</span>
      <i className="menu-arrow"></i>
    </a>
    <div className="collapse" id="icons">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item"> <a className="nav-link" href="size">Danh s??ch Size</a></li>
        <li className="nav-item"> <a className="nav-link" href="addsize">Th??m Size</a></li>
      </ul>
    </div>
  </li>
  <li className="nav-item nav-category">pages</li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
      <i className="menu-icon mdi mdi-account-circle-outline"></i>
      <span className="menu-title">User Pages</span>
      <i className="menu-arrow"></i>
    </a>
    <div className="collapse" id="auth">
      <ul className="nav flex-column sub-menu">
        <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> ????ng xu???t </a></li>
      </ul>
    </div>
  </li>
  
</ul>
</nav>
    </>
)
}
export default Menu;