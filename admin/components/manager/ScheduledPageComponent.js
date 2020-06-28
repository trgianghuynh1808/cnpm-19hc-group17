import React, { Fragment, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

import ModalComponent from "../core/ModalComponent";
import CheckBoxComponent from "../core/inputs/CheckBoxComponent";

const localizer = momentLocalizer(moment);

const EVENT_DATA = [
  {
    id: 1,
    title: "GiangHuynh",
    start: new Date(),
    end: new Date(),
  },
  {
    id: 2,
    title: "TienDung",
    start: new Date(),
    end: new Date(),
  },
  {
    id: 3,
    title: "HoangBao",
    start: new Date(),
    end: new Date(),
  },
];

const DetailScheduledComponent = ({
  setStateEventData,
  stateEventData,
  curStartDate,
}) => {
  return (
    <Fragment>
      <div className="detail-scheduled-wrp text-light font-weight-bold font-20">
        <div className="row">
          <h4 className="text-center w-100 ">Chia lịch làm việc</h4>
        </div>
        <div className="mt-3">
          <div className="row justify-content-center">
            <div className="col-lg-5 ">Giang Huynh1</div>
            <div className="col-lg-4 ">Nhân viên</div>
            <div className="col-lg-2">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={(event) => {
                    console.log("test checked", event.target.checked);
                    let curData = {
                      id: 8,
                      title: "Giang Huynh1",
                    };

                    if (event.target.checked) {
                      setStateEventData([
                        ...stateEventData,
                        {
                          ...curData,
                          start: curStartDate,
                          end: curStartDate,
                        },
                      ]);
                    }
                  }}
                />
                <span className="slider round" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .detail-scheduled-wrp {
          width: 700px;
        }
      `}</style>
    </Fragment>
  );
};

const ScheduledPageComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [stateEventData, setStateEventData] = useState(EVENT_DATA);
  const [curStartDate, setCurStartDate] = useState(null);

  return (
    <Fragment>
      <div className="scheduled-wrp">
        <Calendar
          selectable
          popup
          localizer={localizer}
          events={stateEventData}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          defaultView={Views.MONTH}
          views={{ month: true }}
          onSelectSlot={(slotInfo) => {
            const { start: curDate } = slotInfo;
            setIsOpenModal(true);
            setCurStartDate(curDate);
          }}
        />
        <ModalComponent
          modalIsOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          styleModal={{
            content: {
              top: "20%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "currentcolor",
            },
          }}
        >
          <DetailScheduledComponent
            setStateEventData={setStateEventData}
            stateEventData={stateEventData}
            curStartDate={curStartDate}
          />
        </ModalComponent>
      </div>
      <style jsx>{`
        .scheduled-wrp {
          padding: 40px 30px;
        }
      `}</style>
    </Fragment>
  );
};

export default ScheduledPageComponent;
