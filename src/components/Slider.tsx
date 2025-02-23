import homeVideo from "@/assets/home-video.mp4";
import homeAudio from "@/assets/path-to-you.mp3";

const Slider: React.FC = () => {
    return (
        <main className="w-full h-screen -z-10 overflow-hidden relative">
            <video autoPlay muted loop className="w-full h-screen object-cover">
                <source src={homeVideo} type="video/mp4" />
            </video>

            <audio autoPlay loop>
                <source src={homeAudio} type="audio/mpeg" />
            </audio>

            <div className="h-full flex flex-col gap-6 justify-center items-center absolute inset-0 text-center box-border text-white px-5">
                <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[2px]">
                    Research Assistant @ Oracle R&D Center
                </h1>
                <h3 className="italic uppercase text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium tracking-[2px]">
                    {"< "} <span className="text-green-600">FUTURE:</span>{" "}
                    {"IS_ LOADING />"}
                </h3>
            </div>
        </main>
    );
};

export default Slider;
