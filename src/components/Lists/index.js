import React from "react";
import { useEffect } from "react";
import List from "./List";

const Lists = ({ data, setData, setEditItem, filteredArray }) => {
  function deleteitem(id) {
    const updatedata = [...data].filter((item) => item.id !== id);
    setData(updatedata);
  }

  useEffect(() => {
    setEditItem({});
  }, []);

  return (
    <div className="body">
      {filteredArray?.map((item) => {
        return (
          <>
            <List
              item={item}
              key={item.id}
              deleteitem={deleteitem}
              setEditItem={setEditItem}
            />
          </>
        );
      })}
    </div>
  );
};

export default Lists;
