import React, { useMemo, useEffect, Fragment, useState } from "react";
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
} from "../stores/ContractState";
import SearchBarComponent from "../components/Commons/SearchBarComponent";
import ModalDetailsCarComponent from "../components/ManageContract/ModalDetailsCar";
import { DONE_STATUS_CONTRACT, REJECT_STATUS_CONTRACT } from "../utils/enums";

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

const connectToRedux = connect(
  createStructuredSelector({
    filterReviewingContractsData: getFilterReviewingContractsDataSelector,
    filterReviewingContractsCount: getFilterReviewingContractsCountSelector,
  }),
  (dispatch) => ({
    getFilterReviewingContracts: ({ limit, offset, email }) => {
      dispatch(getFilterReviewingContracts({ limit, offset, email }));
    },
    updateStatusContract: (idContract, status, callback) => {
      dispatch(updateStatusContract(idContract, status, callback));
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

const ManageContractPage = ({
  getFilterReviewingContracts,
  filterReviewingContractsData,
  filterReviewingContractsCount,
  updateStatusContract,
}) => {
  const COLUMNS = useMemo(
    () => [
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
    ],
    []
  );

  const [searchReviewFilter, setSearchReviewFilter] = useState("");

  const debounceSearchReviewFilter = useDebounce(searchReviewFilter);

  //constructor
  useEffect(() => {
    document.title = "Manage Contract";
    getFilterReviewingContracts({
      limit: DEFAULT_LIMIT,
      offset: DEFAULT_OFFSET,
      email: "",
    });
  }, [getFilterReviewingContracts]);

  useEffect(() => {
    if (debounceSearchReviewFilter) {
      getFilterReviewingContracts({
        limit: DEFAULT_LIMIT,
        offset: DEFAULT_OFFSET,
        email: searchReviewFilter,
      });
    }
  }, [
    debounceSearchReviewFilter,
    getFilterReviewingContracts,
    searchReviewFilter,
  ]);

  if (!filterReviewingContractsData) return <Fragment />;

  const filterContractDataRender = mappingFilterReviewingContractsData(
    filterReviewingContractsData,
    updateStatusContract,
    getFilterReviewingContracts
  );

  return (
    <Wrapper title="Manage Contract">
      <div>
        <Table
          title="Reviewing Contracts"
          columns={COLUMNS}
          data={filterContractDataRender}
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
    </Wrapper>
  );
};

export default enhance(ManageContractPage);
