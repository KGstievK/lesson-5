import Carousel from "./HomeSections/Carousel"
import Production from "./HomeSections/Production"
import Welcome from "./HomeSections/Wlcome"
import Word from "./HomeSections/Word"

const HomePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignContent:'center',
      gap: '60px'
    }}>
      <Welcome/>
      <Carousel/>
      <Production/>
      <Word/>
    </div>
  )
}

export default HomePage