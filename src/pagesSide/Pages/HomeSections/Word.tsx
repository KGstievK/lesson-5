import scss from './Word.module.scss'
import Avatar from '../../../assets/Avatar.svg'
import Avatar2 from '../../../assets/Avatar2.svg'
import Avatar3 from '../../../assets/Avatar3.svg'


const person = [
  {
    img: Avatar,
    comment: " — Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
    name: {
      name: 'Anastasia Dan',
      prof: 'UX Board'
    }
  },
  {
    img: Avatar2,
    comment: " — Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
    name: {
      name: 'Roman Level',
      prof: 'AppName'
    }
  },
  {
    img: Avatar3,
    comment: " — Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
    name: {
      name: 'Akex Sackett',
      prof: 'Reform Layouts'
    }
  },
]

const Word = () => {
  return (
    <section className={scss.Word}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <h1 className={scss.title}>
              Don't take our word for it
            </h1>
            <p className={scss.text}>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
            </p>
          </div>
          <div className={scss.blocks}>
            {
              person.map((el, id) => (
                <div key={id} className={scss.block}>
                  <img src={el.img} alt="Avatar" />
                  <p className={scss.comment}>
                   {el.comment}
                  </p>
                  <p className={scss.name}>{el.name.name} / <span>{el.name.prof}</span></p>
                </div>
              ))
            }
          </div>
          <div className={scss.stay}>
            <div className={scss.from}>
              <h2 className={scss.from_name}>
                Stay in the loop
              </h2>
              <p className={scss.plaisholder}>
                Join our newsletter to get top news before anyone else.
              </p>
            </div>
            <form className={scss.input} action="">
              <input type="text" placeholder='Your best email…' />
              <button className={scss.subscribe}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Word