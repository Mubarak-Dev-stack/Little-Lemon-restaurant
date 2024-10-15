import { faBug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../Layout/Section/Section";
import Hero from "../Hero/Hero";
import Button from "../Button/Button";

import heroImage from '../../assets/hero/restauranfood.jpg';

function NotFoundPage() {
    return (
        <>
            <Hero
                headline="Little Lemon"
                subHeadline="Chicago"
                text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                image={heroImage}
                imageAlt="restaurant food on a plate"
            />
            <Section>
                <div className="flex gap-2">
                    <FontAwesomeIcon className="m-t-1" icon={faBug} size="xl" />
                    <div>
                        <h2>404 - Page not found</h2>
                        <p>Sorry, this page does not exist.</p>
                        <Button href="/">Back to our Homepage</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default NotFoundPage;