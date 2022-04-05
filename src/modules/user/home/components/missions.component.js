import { Container, Row } from "react-bootstrap";

import classes from "../style/missions.module.scss";
import mission1 from "../images/mission1.png";
import mission2 from "../images/mission2.png";
import mission3 from "../images/mission3.png";
import Mission from "./mission.component";

const MISSIONS = [
    { 
        id: 1,
        image: mission1, 
        missionName: "Mission Bongo", 
        describe: "At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions." 
    },
    { 
        id: 2,
        image: mission2, 
        missionName: "Mission BD", 
        describe: "At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions." 
    },
    { 
        id: 3,
        image: mission3, 
        missionName: "Mission 11", 
        describe: "At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions." 
    }
]

const Missions = () => {
    return (
        <section id={classes.missions}>
            <Container>
                <h2 className={`${classes.heading} text-center`}>Discover Univerce</h2>
                <Row>
                    {MISSIONS.map(mission => (
                        <Mission 
                            key={mission.id}
                            id={mission.id}
                            image={mission.image}
                            missionName={mission.missionName}
                            describe={mission.describe}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    );
}
 
export default Missions;