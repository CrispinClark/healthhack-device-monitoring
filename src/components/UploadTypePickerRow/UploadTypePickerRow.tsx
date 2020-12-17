import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import LabelCol from "../LabelColumn";
import {UploadType} from "../../types";


type UploadTypePickerRowProps = {
  uploadType: UploadType
  setUploadType: (value: UploadType) => void
}

const UploadTypePickerRow = ({
  uploadType,
  setUploadType
}: UploadTypePickerRowProps) => {
  function onButtonStateChange(uploadType: UploadType) {
    return function(e: React.FormEvent<HTMLInputElement>) {
      if (e.currentTarget.value) {
        setUploadType(uploadType);
      }
    }
  }

  return (
    <Row>
      <LabelCol>
        Upload Type
      </LabelCol>
      <Col>
        <Form.Check inline type="radio" label="Take picture" checked={uploadType === "snap"} onChange={onButtonStateChange("snap")}/>
        <Form.Check inline type="radio" label="Upload file" checked={uploadType === "file"} onChange={onButtonStateChange("file")}/>
      </Col>
    </Row>
  )
}

export default UploadTypePickerRow;