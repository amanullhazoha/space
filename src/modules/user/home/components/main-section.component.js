import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import classes from "../style/main-section.module.scss";
import { getLaunchRockets } from "../home.actions";
import Rocket from "./rocket.component";

const MainSection = () => {
    const dispatch = useDispatch();

    const launchRockets = useSelector(state => state.homeReducer.launchRockets);

    useEffect(() => {
        dispatch(getLaunchRockets())
    }, [])

    return (
        <main id={classes.mainSection}>
            <Container>
                <Row>
                    {launchRockets.map(launchRocket => (
                        <Rocket 
                            key={launchRocket.flight_number}
                            rocketImage={launchRocket.links.mission_patch_small}
                            rocketType={launchRocket.rocket.rocket_type}
                            rocketName={launchRocket.rocket.rocket_name}
                            launchYear={launchRocket.launch_year}
                            upComing={launchRocket.upcoming}
                        />
                    ))}
                </Row>
            </Container>
        </main>
    );
}
 
export default MainSection;