import React, { useState } from "react";
import Logo from "../Images/shop-removebg-preview.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
//import AiOutlineHeart from 'react-icons/ai'
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Man4OutlinedIcon from "@mui/icons-material/Man4Outlined";
import WomanOutlinedIcon from "@mui/icons-material/WomanOutlined";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HiveIcon from "@mui/icons-material/Hive";
import ShoppinmgcartRoundedButton from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Men",
      icon: <Man4OutlinedIcon />,
    },
    {
      text: "Women",
      icon: <WomanOutlinedIcon />,
    },
    {
      text: "Jewellery",
      icon: <HiveIcon />,
    },
    {
      text: "Electronics",
      icon: <LaptopMacIcon />,
    },
    {
      text: "Wishlist",
      icon: <FavoriteBorderIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppinmgcartRoundedButton />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/men's clothing">Men</Link>
        <Link to="/women's clothing">Women</Link>
        <Link to="/jewellery">Jewellery</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/wishlist">Wishlist</Link>

        <Link to="/cart">
          <BsCart2 className="navbar-cart-icon" />
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <Link to= {`/${item.text.toLowerCase()}`}>
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
