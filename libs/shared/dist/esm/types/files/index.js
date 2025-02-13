export var FileExtensionEnum;
(function (FileExtensionEnum) {
    FileExtensionEnum["JPEG"] = "jpeg";
    FileExtensionEnum["PNG"] = "png";
    FileExtensionEnum["JPG"] = "jpg";
})(FileExtensionEnum || (FileExtensionEnum = {}));
export var MimeTypesEnum;
(function (MimeTypesEnum) {
    MimeTypesEnum["JPEG"] = "image/jpeg";
    MimeTypesEnum["PNG"] = "image/png";
    MimeTypesEnum["JPG"] = "image/jpeg";
})(MimeTypesEnum || (MimeTypesEnum = {}));
export const FILE_EXTENSION_TO_MIME_TYPE = {
    [FileExtensionEnum.JPEG]: MimeTypesEnum.JPEG,
    [FileExtensionEnum.PNG]: MimeTypesEnum.PNG,
    [FileExtensionEnum.JPG]: MimeTypesEnum.JPG,
};
export const MIME_TYPE_TO_FILE_EXTENSION = {
    [MimeTypesEnum.JPEG]: FileExtensionEnum.JPEG,
    [MimeTypesEnum.PNG]: FileExtensionEnum.PNG,
    [MimeTypesEnum.JPG]: FileExtensionEnum.JPG,
};
