import scss from './Footer.module.scss'
import { facebook, github, inc, instagram, twitter } from '../../icons'
const Products = [
  {
    web: 'Web Studio',
  },
  {
    web:  'DynamicBox Flex',
  },
  {
    web:  'Programming Forms',
  },
]

const Resources = [
  {
    exercitation: 'Nostrud exercitation',
  },
  {
    exercitation: 'Visual mockups',
  },
  {
    exercitation: 'Nostrud exercitation',
  },
  {
    exercitation: 'Visual mockups',
  },
  {
    exercitation: 'Nostrud exercitation',
  },
]

const Company = [
  {
    adipiscing: 'Consectetur adipiscing',
  },
  {
    adipiscing: 'Labore et dolore',
  },
  {
    adipiscing: 'Consectetur adipiscing',
  },
  {
    adipiscing: 'Labore et dolore',
  },
  {
    adipiscing: 'Consectetur adipiscing',
  },
]

const  icons = [
  {
    icon: twitter
  },
  {
    icon: github
  },
  {
    icon: facebook
  },
  {
    icon: instagram
  },
  {
    icon: inc
  },
]

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <p className={scss.text}>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <div className={scss.components}>
              <div className={scss.products}>
                <p>
                  Products
                </p>
                <ul>
                  {
                    Products.map((el, id) => (
                      <li key={id}>
                        <a href="">{el.web}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className={scss.products}>
                <p>
                  Resources
                </p>
                <ul>
                  {
                    Resources.map((el, id) => (
                      <li key={id}>
                        <a href="">{el.exercitation}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className={scss.products}>
                <p>
                  Company
                </p>
                <ul>
                 {Company.map((el, id) => (
                    <li key={id}>
                      <a href="">{el.adipiscing}</a>
                    </li>
                 ))
                 }
                </ul>
              </div>
            </div>
          </div>
          <div className={scss.bottom}>
            <p className={scss.cruip}>
              Made by <span>Cruip</span>. All right reserved
            </p>
            <div className={scss.icons}>
              <ul>
                {
                  icons.map((el, id) => (
                    <li key={id}>
                      <a href="#">{el.icon}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer