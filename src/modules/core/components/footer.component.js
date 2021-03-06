import { Container } from "react-bootstrap";
import { Formik, Form, Field } from "formik";

import classes from "../style/scss/footer.module.scss";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id={classes.footer}>
            <Container>
                <section id={classes.subscribe}>
                    <h2 className={classes.heading}>Newsletter</h2>
                    <Formik
                        initialValues={{email: ""}}
                        onSubmit={(value, action) => {
                            alert(`${value.email} Submit`);
                            action.setSubmitting(false);
                            action.resetForm();
                        }}
                    >
                        {formikProps => (
                            <Form onSubmit={formikProps.handleSubmit} className={classes.subscribeFrom}>
                                <Field type="email" name="email" placeholder="Email" />
                                <button type="submit">Subscribe</button>
                            </Form>
                        )}
                    </Formik>
                </section>

                <div className={`${classes.footerBottom}`}>
                    <Link id={classes.logo} className="order-md-1" to="/">
                        <img src={logo} alt="logo" className="img-fluid" />
                        SPACE
                    </Link>

                    <ul className={`${classes.socailIcons} order-md-3`}>
                        <li>
                            <a href="https://twitter.com" target="_blank">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>    
                        
                        <li>
                            <a href="https://www.facebook.com" target="_blank">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com" target="_blank">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </li>
                    </ul>

                    <p className="order-md-2">Space 2020, All rights reserved</p>

                </div>
            </Container>
        </footer>
    );
}
 
export default Footer;