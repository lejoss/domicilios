/**
 *
 * Multer configuration
 * @see https://github.com/expressjs/multer
 *
 */

import multer from 'multer'


const storage =  multer.diskStorage({

    destination(req, file, callback) {
        callback(null, './uploads')
    },
    filename (req, file, callback) {

        // when writing the name of uploaded file
        // pass the name to req body image
        //req.body.image = file.originalname
        callback(null, file.originalname)
    }
})

const upload =
    multer({ storage : storage})
        .single('image') // image is the name of the multipart element in the "form" Eg "<input type file>"


export default upload


