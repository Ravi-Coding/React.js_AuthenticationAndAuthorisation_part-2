import {Link, withRouter} from 'react-router-dom' // step 18 withRouter import

import Cookies from 'js-cookie' // step 16

import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token') // step 17
    history.replace('/login') // step  20
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/products" className="nav-link">
            <li>Products</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li>Cart</li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout} // step 15
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header) // step  19 ,withRouter
