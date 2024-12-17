import homeVideo from "@/assets/home-video.mp4";
import homeAudio from "@/assets/path-to-you.mp3";

const Slider: React.FC = () => {
    return (
        <main className="relative top-[100px] w-full h-full -z-10 bg-slate-900 overflow-hidden">
            <video autoPlay muted loop className="w-full h-full object-cover">
                <source src={homeVideo} type="video/mp4" />
            </video>

            <audio autoPlay loop>
                <source src={homeAudio} type="audio/mpeg" />
            </audio>

            <div className="h-screen flex flex-col gap-6 justify-center items-center absolute inset-0 z-50 text-center box-border text-white">
                <h1 className="uppercase text-6xl font-medium tracking-[2px]">
                    Computer Architect & Changemaker
                </h1>
                <h3 className="italic uppercase text-3xl font-medium tracking-[2px]">
                    {"< "} <span className="text-green-600">FUTURE:</span>{" "}
                    {"IS_ LOADING />"}
                </h3>
            </div>
        </main>
    );
};

export default Slider;
