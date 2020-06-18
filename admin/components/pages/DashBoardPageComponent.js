import React from "react";
import Link from "next/link";

const DashBoardPageComponent = () => {
  return (
    <div>
      <Link href="/examples/layout">
        <div className="cursor-pointer text-primary">-> Đi đến mẫu layout</div>
      </Link>
      <Link href="/examples/core">
        <div className="cursor-pointer text-primary">
          -> Đi đến mẫu core components page
        </div>
      </Link>
    </div>
  );
};

export default DashBoardPageComponent;
