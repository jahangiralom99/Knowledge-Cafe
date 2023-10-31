import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between container mx-auto p-4 items-center ">
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <div>
                <img className="border rounded-full" src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;