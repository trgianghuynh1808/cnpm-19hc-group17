import React from 'react';

const renderActionIcon = (action) => {
  switch (action) {
    case 'edit':
      return (
        <img
          src="/static/assets/images/icons/edit-icon.png"
          height="25"
          width="25"
          className="action-icon"
        />
      );
    case 'remove':
      return (
        <img
          src="/static/assets/images/icons/trash-icon.png"
          height="25"
          width="25"
          className="action-icon"
        />
      )
    default:
      break;
  }
}

const Actions = (props) => {
  const { actionList = [] } = props;
  return (
    <div className="row justify-content-center">
      {actionList.map((action) => {
        const { iconName, onClick } = action;
        return (
          <div onClick={onClick} key={iconName} className="col-lg-3">
            {renderActionIcon(iconName)}
          </div>
        );
      })}
      <style jsx>
        {`
          .action-icon {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Actions;