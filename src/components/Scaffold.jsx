import catsImage from '../assets/cat.jpg'
import Footer from './Footer'
import Header from './Header'

export default function Scaffold({ children }){ 
    return (<>
        <Header image={catsImage}/>
        {children == null ? <></> : children}
        <Footer image={catsImage}/>
    </>)
}