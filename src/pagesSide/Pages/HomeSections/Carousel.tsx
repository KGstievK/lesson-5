import scss from './Carousel.module.scss'
import { creative, globus, like, paper, person, star } from '../../components/icons'

// interface carousel {}
const block = [
  {
    icon: star,
    title: 'Instant Features',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: paper,
    title: 'Instant Features',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: globus,
    title: 'Instant Features',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: person,
    title: 'Instant Features',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: like,
    title: 'Instant Features',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
  {
    icon: creative,
    title: 'Instant Features',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  },
]
const Carousel = () => {
  return (
    <section className={scss.Carousel}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
          <h2 className={scss.title}>
            The majority our customers do not understand their workflows.
          </h2>
          <p className={scss.text}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={scss.blocks}>
            {
             block.map((item, id) => (
              <div key={id} className={scss.block}>
                <div className={scss.stat}>
                  {item.icon}
                </div>
                <h3 className={scss.instant_features}>
                  {item.title} 
                </h3>
                <p className={scss.text_block}>
                  {item.text}
                </p>
              </div>
             ))
            }
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel