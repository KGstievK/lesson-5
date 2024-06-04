import scss from './Welcome.module.scss'
import image from '../../../assets/annie-spratt@2x.svg'

const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
          <h1 className={scss.title}>Landing template for startups</h1>
          <p className={scss.text}>
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className={scss.btns}>
            <button className={scss.start_free_trial}>Start free trial</button>
            <button className={scss.learn_more}>Learn more</button>
          </div>
          </div>
        </div>
        <div className={scss.bottom}>
          <img src={image} alt="image" />
        </div>
      </div>
    </section>
  )
}

export default Welcome