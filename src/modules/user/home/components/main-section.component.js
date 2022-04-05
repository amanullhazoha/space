import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import classes from "../style/main-section.module.scss";
import { getLaunchRockets } from "../home.actions";
import Rocket from "./rocket.component";
import Filterbar from "./filterbar.component";

const MainSection = () => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState("");
    const [upcoming, setUpcoming] = useState("no");
    const [launchYear, setLaunchYear] = useState("All");
    const launchRockets = useSelector(state => state.homeReducer.launchRockets);

    const handleSearch = (value) => {
        setSearchValue(value);
    }

    const handleFilterUpcoming = (event) => {
        setUpcoming(event.target.value);
    }

    const handleFilterLaunchYear = (event) => {
        setLaunchYear(event.target.value);
    }

    const searchingData = () => {
        if(searchValue) {
            return launchRockets.filter(
                launchRocket => launchRocket.rocket.rocket_name.toLowerCase() === searchValue.toLowerCase()
            )
        } else {
            return launchRockets;
        }
    }

    const filteringData = (datas) => {
        const filterUpcoming = () => {
            if(upcoming === "yes") {
                return datas.filter(data => data.upcoming === true)
            } else {
                return datas.filter(data => data.upcoming !== true)
            }
        }

        const filterYear = () => {
            if(launchYear === "All") {
                return filterUpcoming();
            } else if(launchYear === "Less Than 1990") {
                return filterUpcoming().filter(data => Number(data.launch_year) < 1990);
            } else if (launchYear === "Greater Than 2020") {
                return filterUpcoming().filter(data => Number(data.launch_year) > 2020);
            } else {
                const [start, end] = launchYear.split("-");
                return filterUpcoming().filter(data => Number(data.launch_year) >= start && Number(data.launch_year) <= end);
            }
        }

        return filterYear();
    }

    useEffect(() => {
        dispatch(getLaunchRockets())
    }, [])

    const searchedData = searchingData();
    const filteredData = filteringData(searchedData);

    return (
        <main id={classes.mainSection}>
            <Container>
                <Filterbar 
                    handleSearch={handleSearch}
                    handleFilterUpcoming={handleFilterUpcoming}
                    handleFilterLaunchYear={handleFilterLaunchYear}
                />

                <Row>
                    {filteredData.map(launchRocket => (
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