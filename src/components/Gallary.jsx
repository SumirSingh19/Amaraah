import GAL1 from "../assets/images/gal1.png";
import GAL2 from "../assets/images/gal2.png";
import GAL3 from "../assets/images/gal3.png";
import GAL4 from "../assets/images/gal4.png";
import GAL5 from "../assets/images/gal5.png";

const Gallary = () => {
    return (
        <div className="flex flex-col gap-9 items-center">
            <div className="text-center font-nephilm text-4xl text-[#6D6D6D]">
                <span>Gallary</span>
            </div>
            <div className="flex gap-1">
                <img src={GAL1} className="h-[20rem]" alt="" />
                <img src={GAL2} className="h-[20rem]" alt="" />
                <img src={GAL3} className="h-[20rem]" alt="" />
                <img src={GAL4} className="h-[20rem]" alt="" />
                <img src={GAL5} className="h-[20rem]" alt="" />
            </div>
        </div>
    )
};
export default Gallary;