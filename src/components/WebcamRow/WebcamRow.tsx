import Webcam from "react-webcam";
import {Button} from "react-bootstrap";
import React from "react";
import {SnappedImage} from "../../types";
import moment from "moment";

type WebcamRowProps = {
  snappedImage: SnappedImage | undefined
  setSnappedImage: (value: SnappedImage | undefined) => void
}

const WebcamRow = ({snappedImage, setSnappedImage}: WebcamRowProps) => {
  const webcamRef = React.useRef<HTMLInputElement & Webcam>(null);

  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const newImageSrc = webcamRef.current.getScreenshot() as string
      const timestamp = moment();
      setSnappedImage({
        src: newImageSrc,
        timestamp
      })
    }
  }, [webcamRef, setSnappedImage])

  return (
    <>
      {
        typeof snappedImage === "undefined"
          ? (
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
              <Button onClick={capture}>Capture</Button>
            </>
          )
          : (
            <>
              <img src={snappedImage.src}/>
              <Button onClick={() => setSnappedImage(undefined)}>Clear</Button>
            </>
          )
      }
    </>
  )
}

export default WebcamRow;