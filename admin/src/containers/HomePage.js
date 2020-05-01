import React, { useMemo } from "react";

import Wrapper from "../components";
import Table from "../components/Table";
import AuthenHOC from "../components/HOC/AuthenHOC";
import { STATUS_BADGE_INFO } from "../utils/enums";

const RenderTextComponent = (stt) => {
  return <div className="text-center text-muted">{stt}</div>;
};

const RenderNameComponent = (name) => {
  return (
    <div className="widget-content p-0">
      <div className="widget-content-wrapper">
        <div className="widget-content-left mr-3">
          <div className="widget-content-left">
            <img
              width={40}
              className="rounded-circle"
              src="assets/images/avatars/4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="widget-content-left flex2">
          <div className="widget-heading">{name}</div>
          <div className="widget-subheading opacity-7">Web Developer</div>
        </div>
      </div>
    </div>
  );
};

const RenderStatusComponent = (status) => {
  const curBadge = STATUS_BADGE_INFO.find(
    (badgeInfo) => badgeInfo.name === status
  ).badge;

  return (
    <div className="text-center">
      <div className={`badge badge-${curBadge}`}>{status}</div>
    </div>
  );
};

const RenderActionDetailsComponent = () => {
  return (
    <div className="text-center">
      <button
        type="button"
        id="PopoverCustomT-1"
        className="btn btn-primary btn-sm"
      >
        Details
      </button>
    </div>
  );
};

const HomePage = ({ login }) => {
  const EXAMPLES_COLUMNS = useMemo(
    () => [
      {
        Header: "#",
        accessor: "stt",
        className: "text-center",
        component: RenderTextComponent,
      },
      {
        Header: "Name",
        accessor: "name",
        className: "text-center",
        component: RenderNameComponent,
      },
      {
        Header: "City",
        accessor: "city",
        className: "text-center",
        component: RenderTextComponent,
      },
      {
        Header: "Status",
        accessor: "status",
        className: "text-center",
        component: RenderStatusComponent,
      },
      {
        Header: "Actions",
        accessor: "actions",
        className: "text-center",
        component: RenderActionDetailsComponent,
      },
    ],
    []
  );

  const EXAMPLES_DATA = useMemo(
    () => [
      {
        stt: "#345",
        name: "Test Name",
        city: "Berlin",
        status: "reviewing",
        actions: "Details",
      },
    ],
    []
  );

  document.title = "Dashboard";
  return (
    <Wrapper title="Analytics Dashboard ">
      <Table
        title="Dash board table"
        columns={EXAMPLES_COLUMNS}
        data={EXAMPLES_DATA}
      />
    </Wrapper>
  );
};

export default AuthenHOC(HomePage);
