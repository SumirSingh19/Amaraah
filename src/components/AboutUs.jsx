import PIC from "../assets/images/our-story.png";

const AboutUs = () => {
    return (
        <div className="flex flex-col gap-14">
            <div className="font-nephilm text-[#6D6D6D] text-7xl pl-2">
                <span>About Us</span>
            </div>
            <div className="text-center flex flex-col text-lg gap-10">
                <img src={PIC} alt="" />
                <span className="font-barlow px-2 text-[#6D6D6D]">
                At Amaarah, we believe that jewellery is more than just an accessory-it&apos;s an expression of individuality and a 
                symbol of life&apos;s most cherished moments. With a passion for artistry and a commitment to excellence, we craft 
                each piece with meticulous attention to detail and a dedication to quality. Each of our pieces are inspired by 
                timeless elegance and contemporary trends, ensuring that every creation is both classic and unique, while also 
                being pocket friendly. Our journey is driven by a love for beauty and a desire to help our customers celebrate their 
                personal stories through exquisite jewellery that lasts a lifetime. We pride ourselves on the transparency with 
                the customers, since we keep them in the loop, with all the shared details. Whether it&apos;s a gift for a loved one 
                or a treat for yourself, Amaarah is here to make every moment sparkle.
                </span>
            </div>
        </div>
    )
};

export default AboutUs;