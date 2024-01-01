import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Log out Successfully");
                alert("Log out Successfully");
            })
            .catch(error => {
                console.log(error)
            })
    }

    const link = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-red-500 font-semibold underline" : ""}>
            Home
        </NavLink>
        <NavLink to="/login" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-red-500 font-semibold underline" : ""}>
            Login
        </NavLink>
        <NavLink to="/register" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-red-500 font-semibold underline" : ""}>
            Register
        </NavLink>
        <NavLink to="/order" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-red-500 font-semibold underline" : ""}>
            Order
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-red-500 font-semibold underline" : ""}>
            DashBoard
        </NavLink>
        <NavLink to="/profile" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-red-500 font-semibold underline" : ""}>
            Profile
        </NavLink>
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Context Api</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 text-lg">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user ? <>
                                <span className="mr-4">{user.email}</span>
                                <a onClick={handleLogOut} className="btn">Sign Out</a>
                            </> :
                                <Link to="/login"><button className="btn">Login</button></Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;