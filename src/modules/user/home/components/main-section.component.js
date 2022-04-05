import { Container, Row } from "react-bootstrap";

import classes from "../style/main-section.module.scss";
import Rocket from "./rocket.component";

import image from "../images/mission1.png"

const MainSection = () => {
    return (
        <main id={classes.mainSection}>
            <Container>
                <Row>
                    <Rocket 
                        rocketImage={image}
                        rocketType="Falcon 2"
                        rocketName="FalconSat"
                        launchYear="2006"
                        upComing={true}
                    />
                </Row>
            </Container>
        </main>
    );
}
 
export default MainSection;