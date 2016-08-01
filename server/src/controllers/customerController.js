
/**
 * @param (Mongoose Object)
 * */
const customerController = (Customer) => {

    const get = (req, res) => {

        Customer.find((err, customers) => {
            if (err){
                res.status(500).send(err)
            } else {

                let _customers = customers.map((customer, i) => {
                    let newCustomer = customer.toJSON()
                    // hateos
                    newCustomer.links = {}
                    newCustomer.links.self = `http://${req.headers.host}/api/customers/${newCustomer._id}`

                    return newCustomer

                })
                res.json(_customers)
            }
        })
    }

    const post = (req, res) => {
        let customer = new Customer(req.body)
        console.log(customer)

        if (!req.body.name) {
            res.status(400)
            res.send('customer required')
        } else {

            customer.save()
            res.status(200)
            res.send(customer)
        }
    }

    return { get, post }
}

module.exports = customerController