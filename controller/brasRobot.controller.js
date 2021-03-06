const mqtt = require('mqtt')

const host = '94.247.176.184'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
let lastDataGet=""
const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000,
})


const topic = 'selection'
client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
})
client.on('message', (topicDiplayAngle, payload) => {
    console.log('Received Message:', topic, payload.toString())
    const lastDataGet = payload.toString()

})
exports.createMouve = (req, res) => {


    let publishWork = true;

    // TODO: FORMATER L ANGLE et empech
    let {angle, doigt} = req.query
    console.log(angle)

    if (!angle) angle = 90;
    if (!doigt) doigt = 0;
    client.publish(topic, `${doigt}:${angle}`, {
        qos: 0, retain: false

    }, (error) => {
        if (error) {
            publishWork = false
            console.error(error)
        }
    })
    if (publishWork) {
        return res.status(200).send({
            message: "Mouvement enregistrer",
        });
    } else {
        return res.status(400).send({
            message: "Un problème est survenue",
        });
    }

};

exports.getPosition = (req,res) => {

    return res.status(200).send({
        lastData: "2:5:5:5:5",
      //  lastData: lastDataGet
    });

}
exports.setBoolean = (req,res) => {
    let publishWork = true;

    let {bool} = req.query
    client.publish("5doigts", `${bool}`, {
        qos: 0, retain: false

    }, (error) => {
        if (error) {
            publishWork = false
            console.error(error)
        }
    })
    if (publishWork) {
        return res.status(200).send({
            message: "Mouvement enregistrer",
        });
    } else {
        return res.status(400).send({
            message: "Un problème est survenue",
        });
    }

}

