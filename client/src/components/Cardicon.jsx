import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Cardicon = () => {
  const data = useSelector((state) => state.authSlice.value?.data);
  const [Cardlist, setCardList] = useState([]);

  useEffect(() => {
    const baseurl = import.meta.env.VITE_BASE_URL;
    function getCardList() {
      axios
        .get(`${baseurl}/card/usercardlist/${data?._id}`)
        .then((res) => {
          setCardList(res.data.data);
        })
        .catch((err) => {
          toast.error(err);
        });
    }
    getCardList();
  }, []);

  return (
    <>
      {data && (
        <div className="bg-gray-700 rounded-xl fixed right-0 top-1/8  flex justify-center items-center cursor-pointer w-[50px] h-[50px] mr-6">
          <Link to="/card">
            <FaCartArrowDown className="w-[30px] h-[30px]" />
          </Link>
          <h2 className="absolute font-bold text-xl text-red-500 top-[-10px] right-[-3px]">
            {Cardlist?.length}{" "}
          </h2>
        </div>
      )}
    </>
  );
};

export default Cardicon;
