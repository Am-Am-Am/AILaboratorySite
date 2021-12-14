import Header from "../Header/header";
import Information from "../Information/information";
import Partners from "../Partners/partners";
import Footer from "../Footer/footer";
import n from "./landing.module.css"

const Landing = () => {
    return (
        <div className={n.content}>
            <Header />
            <Information />
            <Partners />
            <Footer />
        </div>
    )
}

export default Landing;