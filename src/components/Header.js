import { useState } from "react";
import Profile from "./modals/Profile";
import Chest from "./modals/Chest";
import Gold from "./modals/Gold";
import Shop from "./modals/Shop";
import Team from "./modals/Team";
import Vip from "./modals/Vip";

export default function Header() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [openProfile, setProfile] = useState(false);
  const [openTeam, setTeam] = useState(false);
  const [openGold, setGold] = useState(false);
  const [openVip, setVip] = useState(false);
  const [openShop, setShop] = useState(false);
  const [openChest, setChest] = useState(false);
  const handleClose = () => {
    setProfile(false);
    setTeam(false);
    setGold(false);
    setVip(false);
    setShop(false);
    setChest(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-neutral-800 p-2">
        <div className="flex items-center flex-shrink-0 text-white ml-6 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            SECTOR 35
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              onClick={() => {
                setProfile(true);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer font-semibold mr-4"
            >
              PROFILE
            </a>
            <a
              onClick={(e) => {
                setTeam(true);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer font-semibold mr-4"
            >
              TEAM
            </a>
            <a
              onClick={(e) => {
                setGold(true);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer font-semibold mr-4"
            >
              GOLD
            </a>
            <a
              onClick={(e) => {
                setVip(true);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer font-semibold mr-4"
            >
              VIP
            </a>
            <a
              onClick={(e) => {
                setShop(true);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer font-semibold mr-4"
            >
              SHOP
            </a>
            <a
              onClick={(e) => {
                setChest(true);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer font-semibold mr-4"
            >
              CHEST
            </a>
            <a
              onClick={(e) => {
                console.log(e);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer font-semibold mr-4 "
            >
              LOGOUT
            </a>
          </div>
        </div>
      </nav>
      <Profile open={openProfile} close={handleClose} />
      <Chest open={openChest} close={handleClose} />
      <Gold open={openGold} close={handleClose} />
      <Shop open={openShop} close={handleClose} />
      <Team open={openTeam} close={handleClose} />
      <Vip open={openVip} close={handleClose} />
    </>
  );
}
