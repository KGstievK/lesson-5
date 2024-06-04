import scss from './Header.module.scss'
import Logo from '../../../../assets/logo.svg'
const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={scss.auth}>
            <button className={scss.sing_in}>Sing in</button>
            <button className={scss.sing_up}>Sing up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header