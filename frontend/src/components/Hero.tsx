const Hero = () => {
    // const heroStyle = {
    //     backgroundImage: 'url("./assets/scooter.webp")', // Replace with the actual path to your image
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    // };

    return (
        <div className="bg-blue-800 pb-16">
            <div className="container mx-auto flex flex-col gap-2">
                <h1 className="text-5xl text-white font-light">Search your next stay</h1>
                <p className="text-2xl font-normal text-white">
                    Find affordable hotels for your dream vacation...
                </p>
            </div>
        </div>
    );
};

export default Hero;