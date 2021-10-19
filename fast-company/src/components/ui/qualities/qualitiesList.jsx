import React from "react";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((qual) => (
        <Qualitie {...qual} key={qual._id} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.array
};

export default QualitiesList;
