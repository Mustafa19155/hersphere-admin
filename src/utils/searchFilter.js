import React from "react";

const searchFilter = ({ data, searchValue, keys }) => {
  return data.filter((item) =>
    keys.some((key) =>
      item[key]?.toLowerCase().includes(searchValue.toLowerCase())
    )
  );
};

export default searchFilter;
