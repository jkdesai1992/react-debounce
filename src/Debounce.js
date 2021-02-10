import React, { memo, useState } from "react";
import { debounceAction } from "./utils/commonFunction";

const Debounce = () => {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const debounceOnChange = React.useCallback(
    debounceAction((value) => {
      setMobile(value);
      setLoading(false);
    }, 400),
    []
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          debounceOnChange(e.target.value);
          setLoading(true);
        }}
      />
      <p>{loading ? "Loading..." : mobile}</p>
    </div>
  );
};

export default memo(Debounce);
