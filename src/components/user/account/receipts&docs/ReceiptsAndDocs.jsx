import React from "react";
import Receipts from "./receipts/Receipts";
import Documents from "./docs/Documents";
function ReceiptsAndDocs(props) {
  return (
    <div>
      <Receipts />
      <Documents />
    </div>
  );
}

export default ReceiptsAndDocs;
