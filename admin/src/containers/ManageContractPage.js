import React, { useEffect, Fragment, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import Wrapper from "../components";
import AuthenHOC from "../components/HOC/AuthenHOC";
import Table from "../components/Table";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "../utils/enums";
import {
  getFilterReviewingContracts,
  getFilterReviewingContractsDataSelector,
  updateStatusContract,
  getFilterReviewingContractsCountSelector,
  getFilterContracts,
  getFilterContractsDataSelector,
} from "../stores/ContractState";
import SearchBarComponent from "../components/Commons/SearchBarComponent";
import ModalDetailsCarComponent from "../components/ManageContract/ModalDetailsCar";
import {
  DONE_STATUS_CONTRACT,
  REJECT_STATUS_CONTRACT,
  STATUS_BADGE_INFO,
} from "../utils/enums";

const useDebounce = (text, delay) => {
  delay = delay || 500;
  const [debounced, setDebounced] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(text);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [text, delay]);

  return debounced;
};

const RenderTextComponent = (stt) => {
  return <div className="text-center text-muted">{stt}</div>;
};

const RenderShowDetailsCarComponent = (car) => {
  return (
    <div className="text-center">
      <ModalDetailsCarComponent
        buttonTrigger={
          <button
            type="button"
            id="PopoverCustomT-1"
            className="btn btn-primary btn-sm"
          >
            Details
          </button>
        }
        carInfo={car}
      />
    </div>
  );
};

const RenderActionsComponent = (paramsAction) => {
  const {
    idContract,
    updateStatusContract,
    getFilterReviewingContracts,
  } = paramsAction;

  return (
    <div className="row justify-content-center">
      <button
        type="button"
        id="PopoverCustomT-1"
        className="btn btn-success btn-sm col-lg-3 col-sm-6 mr-1"
        onClick={() => {
          updateStatusContract(idContract, DONE_STATUS_CONTRACT, () => {
            getFilterReviewingContracts({
              limit: DEFAULT_LIMIT,
              offset: DEFAULT_OFFSET,
              email: "",
            });
          });
        }}
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        type="button"
        id="PopoverCustomT-1"
        className="btn btn-danger btn-sm col-lg-3 col-sm-6"
        onClick={() => {
          updateStatusContract(idContract, REJECT_STATUS_CONTRACT, () => {
            getFilterReviewingContracts({
              limit: DEFAULT_LIMIT,
              offset: DEFAULT_OFFSET,
              email: "",
            });
          });
        }}
      >
        <i className="fas fa-ban"></i>
      </button>
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

const connectToRedux = connect(
  createStructuredSelector({
    filterReviewingContractsData: getFilterReviewingContractsDataSelector,
    filterReviewingContractsCount: getFilterReviewingContractsCountSelector,
    filterContractsData: getFilterContractsDataSelector,
  }),
  (dispatch) => ({
    getFilterReviewingContracts: ({ limit, offset, email }) => {
      dispatch(getFilterReviewingContracts({ limit, offset, email }));
    },
    updateStatusContract: (idContract, status, callback) => {
      dispatch(updateStatusContract(idContract, status, callback));
    },
    getFilterContracts: ({ limit, offset, email, status }) => {
      dispatch(getFilterContracts({ limit, offset, email, status }));
    },
  })
);

const enhance = compose(AuthenHOC, connectToRedux);

const mappingFilterReviewingContractsData = (
  filterReviewingContractsData,
  updateStatusContract,
  getFilterReviewingContracts
) => {
  return filterReviewingContractsData.map((contract) => {
    const {
      id,
      name,
      start_rent_date: startRentDate,
      end_rent_date: endRentDate,
      email,
      phone_number: phone,
      deposit,
      car,
    } = contract;
    return {
      name,
      startRentDate,
      endRentDate,
      email,
      phone,
      deposit,
      car,
      paramsAction: {
        idContract: id,
        updateStatusContract,
        getFilterReviewingContracts,
      },
    };
  });
};

const mappingFilterContractsData = (filterContractsData) => {
  return filterContractsData.map((contract) => {
    const {
      name,
      start_rent_date: startRentDate,
      end_rent_date: endRentDate,
      email,
      phone_number: phone,
      deposit,
      car,
      status,
    } = contract;
    return {
      name,
      startRentDate,
      endRentDate,
      email,
      phone,
      deposit,
      car,
      status,
    };
  });
};

const REVIEWING_CONTRACTS_COLUMNS = [
  {
    Header: "Email",
    accessor: "email",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Name",
    accessor: "name",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Phone",
    accessor: "phone",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Deposit",
    accessor: "deposit",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Start Rent Date",
    accessor: "startRentDate",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "End Rent Date",
    accessor: "endRentDate",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Car Info",
    accessor: "car",
    className: "text-center",
    component: RenderShowDetailsCarComponent,
  },
  {
    Header: "Actions",
    accessor: "paramsAction",
    className: "text-center",
    component: RenderActionsComponent,
  },
];

const CONTRACTS_COLUMNS = [
  {
    Header: "Email",
    accessor: "email",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Name",
    accessor: "name",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Phone",
    accessor: "phone",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Deposit",
    accessor: "deposit",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Start Rent Date",
    accessor: "startRentDate",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "End Rent Date",
    accessor: "endRentDate",
    className: "text-center",
    component: RenderTextComponent,
  },
  {
    Header: "Car Info",
    accessor: "car",
    className: "text-center",
    component: RenderShowDetailsCarComponent,
  },
  {
    Header: "Status",
    accessor: "status",
    className: "text-center",
    component: RenderStatusComponent,
  },
];

const ManageContractPage = ({
  getFilterReviewingContracts,
  filterReviewingContractsData,
  filterReviewingContractsCount,
  updateStatusContract,
  filterContractsData,
  getFilterContracts,
}) => {
  const [searchReviewFilter, setSearchReviewFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const debounceSearchReviewFilter = useDebounce(searchReviewFilter);
  const debounceSearchFilter = useDebounce(searchFilter);

  //constructor
  useEffect(() => {
    document.title = "Manage Contract";
    getFilterReviewingContracts({
      limit: DEFAULT_LIMIT,
      offset: DEFAULT_OFFSET,
      email: "",
    });

    getFilterContracts({
      limit: DEFAULT_LIMIT,
      offset: DEFAULT_OFFSET,
      email: "",
      status: "",
    });
  }, [getFilterReviewingContracts, getFilterContracts]);

  useEffect(() => {
    if (debounceSearchReviewFilter) {
      getFilterReviewingContracts({
        limit: DEFAULT_LIMIT,
        offset: DEFAULT_OFFSET,
        email: searchReviewFilter,
        status: "",
      });
    }
  }, [
    debounceSearchReviewFilter,
    getFilterReviewingContracts,
    searchReviewFilter,
  ]);

  useEffect(() => {
    if (debounceSearchFilter) {
      getFilterContracts({
        limit: DEFAULT_LIMIT,
        offset: DEFAULT_OFFSET,
        email: searchFilter,
        status: "",
      });
    }
  }, [debounceSearchFilter, getFilterContracts, searchFilter]);

  if (!filterReviewingContractsData || !filterContractsData)
    return <Fragment />;

  const filterReviewingContractDataRender = mappingFilterReviewingContractsData(
    filterReviewingContractsData,
    updateStatusContract,
    getFilterReviewingContracts
  );

  const filterContractDataRender = mappingFilterContractsData(
    filterContractsData
  );

  return (
    <Wrapper title="Manage Contract">
      <div>
        <Table
          title="Reviewing Contracts"
          columns={REVIEWING_CONTRACTS_COLUMNS}
          data={filterReviewingContractDataRender}
          customHeader={
            <SearchBarComponent
              placeholder="Enter email"
              doOnChange={(event) => {
                const curValue = event.target.value;
                setSearchReviewFilter(curValue);
              }}
            />
          }
          paginationInfo={{
            count: filterReviewingContractsCount,
            limit: DEFAULT_LIMIT,
          }}
        />
      </div>
      <div>
        <Table
          title="Contracts"
          columns={CONTRACTS_COLUMNS}
          data={filterContractDataRender}
          customHeader={
            <SearchBarComponent
              placeholder="Enter email"
              doOnChange={(event) => {
                const curValue = event.target.value;
                setSearchFilter(curValue);
              }}
            />
          }
          paginationInfo={{
            count: filterReviewingContractsCount,
            limit: DEFAULT_LIMIT,
          }}
        />
      </div>
    </Wrapper>
  );
};

export default enhance(ManageContractPage);
