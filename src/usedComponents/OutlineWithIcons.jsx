"use client";

import { Button } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function OutlineWithIcons() {
  return (
    <>
      <Button.Group outline>
        <Link to={"/paying"}>
          <Button gradientDuoTone="cyanToBlue">
            <HiUserCircle className="w-4 h-4 mr-3" />
            <p>Оплатить</p>
          </Button>
        </Link>
        <Link to={'/salepack'} >
          <Button gradientDuoTone="cyanToBlue">
            <HiAdjustments className="w-4 h-4 mr-3" />
            <p>В корзину</p>
          </Button>
        </Link>
        <Link to={'/wishlist'}>
        <Button gradientDuoTone="cyanToBlue">
          {/* <HiCloudDownload className="w-4 h-4 mr-3" /> */}
          <div className="h-3">
            <img
              className="h-5 mr-2"
              src="/Social-ico/gemstone_jewel_jewelry_crystal_gem_diamond_asset_icon_254028.png"
              alt=""
            />
          </div>
          <p>В список желаемых</p>
        </Button>
        </Link>
      </Button.Group>
    </>
  );
}
