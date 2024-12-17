import homeVideo from "@/assets/home-video.mp4";

const Slider = () => {
    return (
        <div className="relative top-[100px] w-full h-full -z-10">
            <video autoPlay muted loop className="w-full h-full object-cover">
                <source src={homeVideo} type="video/mp4" />
            </video>
        </div>
    );
};

export default Slider;
