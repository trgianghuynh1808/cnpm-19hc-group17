import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const MENU_ITEMS_DATA = [
  {
    name: "dashboard",
    slug: "/",
  },
  {
    name: "QL Xe đang cho thuê",
    slug: "",
  },
  {
    name: "QL Xe rỗi",
    slug: "",
  },
  {
    name: "Phân chia lịch làm việc",
    slug: "",
  },
  {
    name: "QL Xe đang có vấn đề",
    slug: "",
  },
];

const VerticalComponent = ({ menuItemsData = MENU_ITEMS_DATA }) => {
  const router = useRouter();

  return (
    <Fragment>
      <div className="vertical-bar w-100 text-light font-weight-bold ">
        <div className="revenue-section">
          <h4 className="text-center ">10.000.000 VNĐ</h4>
          <div className="text-center">Doanh thu/ngày</div>
        </div>
        <div className="container statistical-section">
          <div className="row justify-content-around">
            <div className="col-lg-3 statistical-box">
              <div className="text-center">95</div>
              <div className="text-center">users</div>
            </div>
            <div className="col-lg-3 statistical-box">
              <div className="text-center">120</div>
              <div className="text-center">bills</div>
            </div>
            <div className="col-lg-3 statistical-box">
              <div className="text-center">58</div>
              <div className="text-center">cars</div>
            </div>
          </div>
        </div>
        <div className="menu-items-section">
          {menuItemsData.map((menuItem, index) => {
            if (router.pathname === menuItem.slug)
              return (
                <div
                  className="container text-capitalize menu-item font-20 cursor-pointer menu-item-active"
                  key={index}
                >
                  {menuItem.name}
                </div>
              );
            else {
              return (
                <Link href={menuItem.slug} key={index}>
                  <div className="container text-capitalize menu-item font-20 cursor-pointer ">
                    {menuItem.name}
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <style jsx>
        {`
          .vertical-bar {
            height: 900px;
            background-color: #39247e;
          }
          .vertical-bar .revenue-section {
            padding-top: 40px;
          }
          .vertical-bar .statistical-section {
            margin: 40px 0px;
          }

          .vertical-bar .statistical-box {
            border: 2px solid #e5e5e5;
            box-sizing: border-box;
            border-radius: 10px;
            padding: 8px 10px;
          }

          .vertical-bar .menu-item {
            padding: 15px;
            padding-left: 30px;
          }

          .vertical-bar .menu-item:hover {
            background-color: #4a2da8;
          }
          .vertical-bar .menu-item-active {
            background-color: #7d3c98;
            border-left: 8px solid #af7ac5;
          }
        `}
      </style>
    </Fragment>
  );
};

export default VerticalComponent;
