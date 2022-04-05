import { Col } from "react-bootstrap";

import classes from "../style/scss/mission.module.scss";

const Mission = ({ id, image, missionName, describe }) => {
    return (
        <Col md={4}>
            <div className={classes.content}>
                <img src={image} alt={missionName} className="img-fulid" />
                <h3 className={classes.title}>{missionName}</h3>
                <p className="text-center">{describe}</p>
            </div>
        </Col>
    );
}
 
export default Mission;