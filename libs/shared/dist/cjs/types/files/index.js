"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIME_TYPE_TO_FILE_EXTENSION = exports.FILE_EXTENSION_TO_MIME_TYPE = exports.MimeTypesEnum = exports.FileExtensionEnum = void 0;
var FileExtensionEnum;
(function (FileExtensionEnum) {
    FileExtensionEnum["JPEG"] = "jpeg";
    FileExtensionEnum["PNG"] = "png";
    FileExtensionEnum["JPG"] = "jpg";
})(FileExtensionEnum = exports.FileExtensionEnum || (exports.FileExtensionEnum = {}));
var MimeTypesEnum;
(function (MimeTypesEnum) {
    MimeTypesEnum["JPEG"] = "image/jpeg";
    MimeTypesEnum["PNG"] = "image/png";
    MimeTypesEnum["JPG"] = "image/jpeg";
})(MimeTypesEnum = exports.MimeTypesEnum || (exports.MimeTypesEnum = {}));
exports.FILE_EXTENSION_TO_MIME_TYPE = {
    [FileExtensionEnum.JPEG]: MimeTypesEnum.JPEG,
    [FileExtensionEnum.PNG]: MimeTypesEnum.PNG,
    [FileExtensionEnum.JPG]: MimeTypesEnum.JPG,
};
exports.MIME_TYPE_TO_FILE_EXTENSION = {
    [MimeTypesEnum.JPEG]: FileExtensionEnum.JPEG,
    [MimeTypesEnum.PNG]: FileExtensionEnum.PNG,
    [MimeTypesEnum.JPG]: FileExtensionEnum.JPG,
};
