import { Container, Row, Col } from "react-bootstrap";

import classes from "../style/banner.module.scss";
import astronaut from "../images/astronaut.png";
import planet from "../images/planet.svg";
import stella from "../images/stella.svg";
import bg from "../images/bg.png";

const Banner = () => {
    return (
        <section id={classes.banner} style={{ backgroundImage: `url(${bg})`}}>
            <Container>
                <Row>
                    <Col md={5} className={classes.bannerContent}>
                        <div className={classes.stella}>
                            <img src={stella} alt="stella" className="img-fluid" />
                            <span>Welcome to Stella</span>
                        </div>
                        <h1>SPACE FOR EVERYONE</h1>
                        <p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                        <button type="button">GET START</button>
                    </Col>
                    
                    <Col md={7} className={classes.content}>
                        <img src={astronaut} alt="Astronaut" className={`img-fluid ${classes.astronaut}`} />
                        <img src={planet} alt="Planet" className={`img-fluid ${classes.planet}`} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Banner;