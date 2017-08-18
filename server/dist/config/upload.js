'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = _multer2.default.diskStorage({
    destination: function destination(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function filename(req, file, callback) {

        // when writing the name of uploaded file
        // pass the name to req body image
        //req.body.image = file.originalname
        callback(null, file.originalname);
    }
}); /**
     *
     * Multer configuration
     * @see https://github.com/expressjs/multer
     *
     */

var upload = (0, _multer2.default)({ storage: storage }).single('image'); // image is the name of the multipart element in the "form" Eg "<input type file>"


exports.default = upload;
//# sourceMappingURL=upload.js.map