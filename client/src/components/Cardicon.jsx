import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";


const Cardicon = () => {

    const data = useSelector((state) => state.authSlice.value?.data);

  return (
    <>
        {
            data && 
            <div className="bg-gray-700 fixed right-0 top-2/4 transilate-x-[-50%] flex justify-center items-center cursor-pointer w-[50px] h-[50px]">
                <Link to="/card">
                    <FaCartArrowDown />
                </Link>
            </div>
        }
    </> 
  )
}

export default Cardicon