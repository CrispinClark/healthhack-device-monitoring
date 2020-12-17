import {Moment} from "moment";

export type UploadType = "file" | "snap";

export type SnappedImage = {
  src: string,
  timestamp: Moment
}
