import { Col } from "react-bootstrap";

import classes from "../style/scss/rocket.module.scss";

const Rocket = ({ rocketImage, rocketName,rocketType, launchYear, upComing }) => {
    return (
        <Col lg={3} md={4} sm={6}>
            <div className={classes.content}>
                <img src={rocketImage} alt={rocketName} className="img-fluid" />
                <h3 className={classes.title}>{rocketType}</h3>
                <p>Rocket Name: {rocketName}</p>
                <p>Launch Year: {launchYear}</p>
                <p>Upcoming: {upComing ? "Yes" : "No"}</p>
            </div>
        </Col>
    );
}
 
export default Rocket;