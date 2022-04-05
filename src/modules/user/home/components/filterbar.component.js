import { Formik, Form, Field } from "formik";

import classes from "../style/scss/filterbar.module.scss";

const LAUNCH_YEARS = ["All", "Less Than 1990", "1991-1995", "1996-2000", "2001-2005", "2006-2010", "2011-2015", "2016-2020", "Greater Than 2020" ]

const Filterbar = ({ handleFilterUpcoming, handleFilterLaunchYear, handleSearch }) => {
    return (
        <div className={classes.filterbar}>
            <div className={classes.filter}>
                <div className={classes.filterUpcoming}>
                    <label htmlFor={classes.upcoming}>Is Upcoming?</label>
                    <select id={classes.upcoming} name="upcoming" onChange={handleFilterUpcoming}>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>

                <div className={classes.filterYear}>
                    <label htmlFor="launchYear">Launch Year?</label>
                    <select 
                        id="launchYear" 
                        className={classes.selectYear} 
                        name="launchYear" 
                        onChange={handleFilterLaunchYear}
                    >
                        {LAUNCH_YEARS.map(year => (
                            <option value={year} key={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={classes.search}>
                <Formik
                    initialValues={{ search: "" }}
                    onSubmit={(value, action) => {
                        handleSearch(value.search)
                        action.setSubmitting(false);
                    }}
                >
                    {formikProps => (
                        <Form onSubmit={formikProps.handleSubmit}>
                            <Field 
                                placeholder="Search for rocket"
                                name="search"
                            />

                            <button type="submit">Search</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
 
export default Filterbar;