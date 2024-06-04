import scss from './HeaderAdmin.module.scss'

const HeaderAdmin = () => {
  return (
    <header className={scss.HeaderAdmin}>
      <div className="container">
        <div className={scss.content}>
          <h1>HeaderAdmin</h1>
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin