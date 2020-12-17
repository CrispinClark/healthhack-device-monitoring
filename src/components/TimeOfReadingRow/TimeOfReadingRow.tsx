import React from "react";
import {Moment} from "moment";
import {Col, Row} from "react-bootstrap";
import DateTime from "react-datetime";
import LabelCol from "../LabelColumn";

type TimeOfReadingRowProps = {
  timeOfReading: Moment
  onTimeOfReadingChanged: (value: Moment) => void
}

const TimeOfReadingRow = ({
  timeOfReading,
  onTimeOfReadingChanged
}: TimeOfReadingRowProps) => {
  return (
    <Row>
      <LabelCol>
        Time of reading
      </LabelCol>
      <Col>
        <DateTime
          value={timeOfReading}
          onChange={v => onTimeOfReadingChanged(v as Moment)}
        />
      </Col>
    </Row>
  )
}

export default TimeOfReadingRow;