import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
    const {isLoggedIn} = useAppContext();

    return (
        <div className="bg-blue-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-normal tracking-tight">
                    <Link to='/'>JKO.Dev</Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn ? (
                        <>
                            <Link 
                                className="flex items-center bg-white text-blue-600 rounded-sm px-3 font-medium hover:bg-blue-600 hover:text-orange-400 hover:rounded-sm"
                                to="/my-bookings"
                            >
                                My Bookings
                            </Link>
                            <Link  
                                className="flex items-center bg-white text-blue-600 rounded-sm px-3 font-medium hover:bg-blue-600 hover:text-orange-400 hover:rounded-sm" 
                                to="/my-hotels"
                            >
                                My Hotels
                            </Link>
                            <SignOutButton />
                        </>
                    ) : (
                      <Link 
                        to="/sign-in" 
                        className="flex items-center bg-white rounded-sm text-blue-600 px-3 font-medium hover:bg-gray-100 hover:text-orange-400"
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