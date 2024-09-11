import Gallary from "./Gallary";
import Intro from "./Intro";
import NewArrival from "./NewArrival";
import Review from "./Review";

const HomePage = () => {
    return (
        <div>
            <Intro />
            <Gallary/>
            <NewArrival />
            <Review />
        </div>
    )
};

export default HomePage;