import scss from './Production.module.scss'
import svg from '../../../assets/Illustration.svg'
import svg2 from '../../../assets/Illustration2.svg'
import svg3 from '../../../assets/Illustration3.svg'
const ilustration = [
  {
    link: 'More speed. Less spend',
    title: 'Keep projects on schedule',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    list: {
      list1: 'Duis aute irure dolor in reprehenderit',
      list2: 'Excepteur sint occaecat ',
      list3: 'Amet consectetur adipiscing elit',
    }
  }
]
const Production = () => {
  return (
    <section className={scss.Production}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <p className={scss.last_title}>
              Reach goals that matter
            </p>
            <h1 className={scss.title}>
              One product, unlimited solutions
            </h1>
            <p className={scss.text}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>
          <div className={scss.ilustration}>
           {
            ilustration.map((el, id) => (
              <div key={id} className={scss.info}>
                <div className={scss.string}>
                  <p className={scss.link}>{el.link}</p>
                  <h3 className={scss.title}>
                    {el.title}
                  </h3>
                  <p className={scss.discription}>
                    {el.discription}
                  </p>
                  <div className={scss.list}>
                    <p><span>&#10004;</span> {el.list.list1}</p>
                    <p><span>&#10004;</span> {el.list.list2}</p>
                    <p><span>&#10004;</span> {el.list.list3}</p>
                  </div>
                </div>
                <div className={scss.image}>
                  <img src={svg} alt="Illustration" />
                </div>
              </div>
            ))
           }
          </div>
          <div className={scss.ilustration}>
           {
            ilustration.map((el, id) => (
              <div key={id} className={scss.info}>
                <div className={scss.image}>
                  <img src={svg2} alt="Illustration" />
                </div>
                <div className={scss.string}>
                  <p className={scss.link}>{el.link}</p>
                  <h3 className={scss.title}>
                    {el.title}
                  </h3>
                  <p className={scss.discription}>
                    {el.discription}
                  </p>
                  <div className={scss.list}>
                    <p><span>&#10004;</span> {el.list.list1}</p>
                    <p><span>&#10004;</span> {el.list.list2}</p>
                    <p><span>&#10004;</span> {el.list.list3}</p>
                  </div>
                </div>
              </div>
            ))
           }
          </div>
          <div className={scss.ilustration}>
           {
            ilustration.map((el, id) => (
              <div key={id} className={scss.info}>
                <div className={scss.string}>
                  <p className={scss.link}>{el.link}</p>
                  <h3 className={scss.title}>
                    {el.title}
                  </h3>
                  <p className={scss.discription}>
                    {el.discription}
                  </p>
                  <div className={scss.list}>
                    <p><span>&#10004;</span> {el.list.list1}</p>
                    <p><span>&#10004;</span> {el.list.list2}</p>
                    <p><span>&#10004;</span> {el.list.list3}</p>
                  </div>
                </div>
                <div className={scss.image}>
                  <img src={svg3} alt="Illustration" />
                </div>
              </div>
            ))
           }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Production