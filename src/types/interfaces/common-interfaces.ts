// import { Places } from "../variables/enum";
// import { S3FOLDER } from "../variables/s3_folder"

export interface IPagination{
    count:number,
    data:any[],
    url?:string
}

export interface S3ImageUpload {
    bucket?: string;
    path?: string;
    filename?: string;
  }
  export interface IS3Upload{
    uploadUrl?:string,
    imageUrl?:string,
    key?:string
  }




