import fs from 'fs'

/**
 * @param (Mongoose Object)
 * */
const storeController = (Store) => {

    const get = (req, res) => {


        Store.find((err, stores) => {
            if (err){
                res.status(500).send(err)
            } else {

                let returnStores = []

                stores.forEach((store, i) => {
                    let newStore = store.toJSON()
                    newStore.links = {}
                    newStore.links.self =  'http://' + req.headers.host + '/api/stores/' + newStore._id
                    returnStores.push(newStore)
                })
                res.json(returnStores)
            }
        })
    }

    const post = (req, res) => {

        let store = new Store(req.body)

        if (!req.body.name) {
            res.status(400)
            res.send('store name required')
        } else {
            store.save()
            res.status(200)
            res.send(store)
        }
    }

    return { get, post }
}

module.exports = storeController

