import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
    const {isLoggedIn} = useAppContext();

    return (
        <div className="bg-gray-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-normal tracking-tight">
                    <Link to='/'>JKO.Dev</Link>
                </span>
                <span className="flex space-x-4">
                    {isLoggedIn ? (
                        <>
                            <Link 
                                className="flex items-center bg-gray-500 text-white rounded-sm px-3 py-1 font-medium hover:text-orange-400"
                                to="/my-bookings"
                            >
                                My Bookings
                            </Link>
                            <Link  
                                className="flex items-center bg-gray-500 text-white rounded-sm px-3 py-1 font-medium hover:text-orange-400" 
                                to="/my-hotels"
                            >
                                My Hotels
                            </Link>
                            <SignOutButton />
                        </>
                    ) : (
                      <Link 
                        to="/sign-in" 
                        className="flex items-center bg-gray-500 rounded-sm text-white px-3 font-medium hover:text-orange-400"
                        >
                            Sign in
                        </Link> 
                      )}                 
                </span>
            </div>
        </div>
    );
};

export default Header;