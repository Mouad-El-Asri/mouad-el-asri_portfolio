import '@/App.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'

const Home: React.FC = () => {
  return (
    <div className='relative'>
		<Navbar />
		<Slider />
		<Footer />
    </div>
  )
}

export default Home;
