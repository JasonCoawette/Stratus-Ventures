import IconButton from "./IconButton";

export default function MenuBar() {
    const handleButtonClick = (title: string) => {
        console.log(`Button clicked: ${title}`);
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 w-full h-fit flex flex-row px-[24px] pt-[16px] pb-[40px] justify-between items-center bg-glass backdrop-blur-[24px] border-t border-stroke">
            <IconButton
                title="Home"
                iconName="home.svg"
                onClick={() => handleButtonClick('Home')}
            />
            <IconButton
                title="Search"
                iconName="search.svg"
                onClick={() => handleButtonClick('Search')}
            />
            <IconButton
                title="Notifications"
                iconName="bell.svg"
                onClick={() => handleButtonClick('Notifications')}
            />
            <IconButton
                title="Profile"
                iconName="user.svg"
                onClick={() => handleButtonClick('Profile')}
            />
        </nav>
    );
}