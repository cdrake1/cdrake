import { TypeAnimation } from "react-type-animation";

const Header = () => {
    return (
        //class for typing animation
        <div className="w-full min-h-screen bg-neutral-900 grid place-content-center">
            <TypeAnimation
                sequence={[
                    "Collin Drake",
                    5000, //pause
                    "", //clear the text
                    1000, //pause
                    "", //clear the text
                    1000, //pause
                    ":)",
                    5000, //pause
                ]}
                wrapper="span"
                speed={200}
                className="text-6xl font-bold text-neutral-300"
                repeat={Infinity}
            />
        </div>
    );
}

export default Header;
