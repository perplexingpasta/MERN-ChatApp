import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="relative mt-auto group">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <>
          <BiLogOut
            className="w-6 h-6 text-white cursor-pointer group-hover:text-red-400"
            // className="w-6 h-6 text-white cursor-pointer"
            onClick={logout}
          />
          <div className="absolute left-16 -top-[0.1rem] transform -translate-x-1/2 w-max px-2 text-white text-lg rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Logout
          </div>
        </>
      )}
    </div>
  );
};

export default LogoutButton;
