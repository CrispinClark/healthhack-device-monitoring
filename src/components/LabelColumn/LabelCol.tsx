import React from "react";

import {FunctionComponent} from "react";
import {Col} from "react-bootstrap";

const LabelCol: FunctionComponent<{}> = ({ children }) => {
  return (
    <Col xs={2}>
      { children }
    </Col>
  )
}

export default LabelCol;