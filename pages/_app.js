import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header logo="Logo Name"/>
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp
