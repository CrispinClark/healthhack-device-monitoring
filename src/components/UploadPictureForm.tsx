import React, {useState} from "react";
import moment, {Moment} from "moment";
import TimeOfReadingRow from "./TimeOfReadingRow";
import UploadTypePickerRow from "./UploadTypePickerRow";
import {Container, Button} from "react-bootstrap";
import {SnappedImage, UploadType} from "../types";
import WebcamRow from "./WebcamRow";

type UploadPictureFormProps = {

}

const UploadPictureForm = ({}: UploadPictureFormProps) => {
  const [timeOfReading, setTimeOfReading] = useState<Moment>(moment());
  const [uploadType, setUploadType] = useState<UploadType>("snap");
  const [snappedImage, setSnappedImage] = useState<SnappedImage | undefined>(undefined);

  function onPictureTakenTimeChange(moment: Moment) {
    setTimeOfReading((moment as Moment))
  }

    function sendToServer() {
        const baseUrl = 'https://558a2eb3-71fe-4834-9142-fd80b0b7e0cc.mock.pstmn.io'
        postData(`${baseUrl}/dummy`,
            {
                value: {
                    imageUrl: snappedImage?.src,
                    unit: "mmol/L"
                },
                timestamp: snappedImage?.timestamp,
                device: "omron"
            })
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            });

    }

    async function postData(url = 'http://localhost:8080', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

  return (
    <Container>
      <TimeOfReadingRow timeOfReading={timeOfReading} onTimeOfReadingChanged={onPictureTakenTimeChange} />
      <UploadTypePickerRow uploadType={uploadType} setUploadType={setUploadType}/>
      <WebcamRow snappedImage={snappedImage} setSnappedImage={setSnappedImage}/>
      <Button onClick={sendToServer}>Send</Button>
    </Container>
  );
};

export default UploadPictureForm;
