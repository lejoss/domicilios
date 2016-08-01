/**
 * Created by lejoss on 7/28/16.
 */

import express from 'express'
import storeController from '../controllers/storeController'
import upload from '../config/upload'

const routes = (Store) => {

    const storeRouter = express.Router()
    const storeCtrl   = storeController(Store)

    /* find a better solution for uploading files in a form.
     * this is middleware example for upload using multer
     * */
    storeRouter.use('/upload', (req, res, next) => {
        upload(req, res, (err) => {
            if (err) {
                res.end('Error uploading file.')
            }
            res.end('File uploaded.')
        })
    })

    storeRouter.route('/')
        .post(storeCtrl.post)
        .get(storeCtrl.get)

    storeRouter.use('/:storeId', (req, res, next) => {
        Store.findById(req.params.storeId, (err, store) => {
            if (err) {
                res.status(500).send(err)
            } else if (store) {
                req.store = store
                next()
            } else {
                res.status(404).send('no store found')
            }
        })
    })

    storeRouter.route('/:storeId')
        .get((req, res) => {
            let returnStore = req.store.toJSON()

            returnStore.links ={}
            res.json(returnStore)
        })

    return storeRouter
}

module.exports = routes