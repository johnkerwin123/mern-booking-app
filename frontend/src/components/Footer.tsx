const Footer = () => {
    return (
        <div className="bg-blue-800 py-10">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-3xl text-white font-normal tracking-tight">
                    JKO.Dev
                </span>
                <span className="text-white font-normal tracking-tight flex gap-4">
                    <p className="cursor-pointer  hover:text-orange-400">Privacy Policy</p>
                    <p className="cursor-pointer  hover:text-orange-400">Terms of Service</p>
                </span>
            </div>
        </div>
    );
};

export default Footer;