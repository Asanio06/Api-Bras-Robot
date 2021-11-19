const mqtt = require('mqtt')

const host = '94.247.176.184'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000,
})

const topic = 'groupeLansana'

exports.createMouve = (req, res) => {
    let yess = true;

    // TODO: FORMATER L ANGLE
    const {angle, doigt} = req.query

    client.publish(topic, `${doigt}&${angle}`, {
        qos: 0, retain: false

    }, (error) => {
        if (error) {
            yess = false
            console.error(error)
        }
    })
    if (yess) {
        return res.status(200).send({
            message: "yes",
        });
    } else {
        return res.status(400).send({
            message: "Noooo",
        });
    }

};