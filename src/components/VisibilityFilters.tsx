import React, { useState } from "react";
import { useAppDispatch } from "../reducks/store/hooks";
import { setFilter } from "../reducks/filter/slice";
import { VISIBILITY_FILTERS } from "../constants";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const VisibilityFilters = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="c-section-tabs">
      <Tabs indicatorColor="primary" value={value} onChange={handleChange}>
        {(Object.keys(VISIBILITY_FILTERS) as Array<
          keyof typeof VISIBILITY_FILTERS
        >).map((filter) => {
          const currentFilter = VISIBILITY_FILTERS[filter];
          return (
            <Tab
              key={currentFilter}
              onClick={() => {
                dispatch(setFilter(currentFilter));
              }}
              label={currentFilter}
            />
          );
        })}
      </Tabs>
    </div>
  );
};

export default VisibilityFilters;
