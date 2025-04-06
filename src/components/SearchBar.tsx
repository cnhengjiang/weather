import React, { memo, useState } from "react";
import { fetchLocation } from "services/weather";
import AsyncSelect from "react-select/async";
import { debounce } from "lodash";
import { LocationData } from "types/types";

interface IProps {
  onSearch: (city: LocationData) => Promise<void>;
}

const SearchBar: React.FC<IProps> = ({ onSearch }) => {
  const [value, setValue] = useState(null);
  const loadOptions = debounce((inputValue, callback) => {
    const realText = inputValue.trim();
    if (!realText) {
      callback([]);
      return;
    }
    fetchLocation(realText).then((data) =>
      callback(
        data?.map((item) => ({
          label: item.name,
          id: item.id,
          adm1: item.adm1,
          adm2: item.adm2,
        }))
      )
    );
  }, 1000);
  const handleChange = async (newValue) => {
    setValue(newValue.id);
    onSearch(newValue).then(() => {
      setValue(null);
    });
  };
  return (
    <>
      <AsyncSelect
        styles={{
          container: (baseStyles, state) => ({
            ...baseStyles,
            width: "300px",
            columnWidth: "300px",
            margin: "10px 0",
          }),
        }}
        cacheOptions
        value={value}
        loadOptions={loadOptions}
        onChange={handleChange}
        placeholder="输入文字搜索..."
      />
    </>
  );
};

export default memo(SearchBar);
