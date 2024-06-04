import scss from './Footer.module.scss'

const FooterAdmin = () => {
  return (
    <footer className={scss.FooterAdmin}>
      <div className="container">
        <div className={scss.content}>
          <h1>FooterAdmin</h1>
        </div>
      </div>
    </footer>
  )
}

export default FooterAdmin