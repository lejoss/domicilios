/**
 * @param (Mongoose Object)
 *
 * */
const orderController = (Order) => {

    const get = (req, res) => {

        Order.find((err, orders) => {
            if (err){
                res.status(500).send(err)
            } else {

                let returnOrders = []

                orders.forEach((order, i) => {
                    let newOrder = order.toJSON()
                    newOrder.links = {}
                    newOrder.links.self =  'http://' + req.headers.host + '/api/orders/' + newOrder._id;
                    returnOrders.push(newOrder);
                })

                res.json(returnOrders)
            }
        })
    }

    const post = (req, res) => {

        let order = new Order(req.body)
        console.log(order)

        if (!req.body.customer) {
            res.status(400)
            res.send('customer required')
        } else {

            order.save()
            res.status(200)
            res.send(order)
        }
    }

    return { get, post }

}

module.exports = orderController