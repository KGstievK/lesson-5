import { Outlet } from 'react-router-dom'
import FooterAdmin from './Footer/FooterAdmin'
import HeaderAdmin from './Header/HeaderAdmin'
import scss from './LayuotAdmin.module.scss'

const LayoutAdmin = () => {
  return (
    <div className={scss.LayoutAdmin}>
      <HeaderAdmin/>
      <main>
        <Outlet/>
      </main>
      <FooterAdmin/>
    </div>
  )
}

export default LayoutAdmin