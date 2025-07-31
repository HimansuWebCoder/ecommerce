function HomeHeader({name, size}) {
    return (
        <div className="mt-1 md:mt-4 w-auto">
            <h1 className={`text-2xl w-[${size}] md:text-3xl font-bold font-inter`}>{name}</h1>
        </div>
    )
}

export default HomeHeader;
