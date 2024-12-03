import React from "react";
import PropTypes from "prop-types";

const StocksTabPanel = (props) => {
  const { children, value, index, data, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <span className="text">Stock feed</span>
      {value === index && (
        <div className="info-row">
          <span>{data.title}</span>
          <br />
          <span>
            <a className="link" href={data.link}>
              Link
            </a>
          </span>
          <div className="info-row">
            <span className="text">CIK: </span>
            <span>{data.cik}</span>
          </div>
          <div className="info-row">
            <span className="text">Form Type: </span>
            <span>{data.form_type}</span>
          </div>
        </div>
      )}
    </div>
  );
};

StocksTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default StocksTabPanel;
