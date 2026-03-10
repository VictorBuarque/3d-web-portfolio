const HeroText = () => {
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            <div className="hidden md:flex flex-col items-center c-space">
                <h1 className="text-4xl font-bold text-primary">Hi I'm Victor Buarque</h1>
                <div className="flex flex-col items-center c-space">
                    <p className="text-5xl font-medium text-secondary">I'm a software engineer</p>
                    <p className="text-4xl text-secondary">Dedicated to building <br />
                        <span className="text-primary text-4xl">performant web applications</span> that are fast, scalable, and easy to use.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center c-space md:hidden">
                <h1 className="text-4xl font-bold text-primary">Hi I'm Victor Buarque</h1>
                <p className="text-lg text-secondary">I'm a software engineer</p>
            </div>
        </div>
    )
}

export default HeroText;
