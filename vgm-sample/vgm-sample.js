module.exports = function(RED) {
    function VGMSampleNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {
            // var resultAmount = Number((Number(node.num) * Number(node.num)) + Number(node.amountValue));
            msg.payload.calcResult = {};
            msg.payload.calcResult.amountValue = (Number(msg.payload.num) * Number(msg.payload.num)) + config.amountValue;
            msg.payload = msg.payload;
            node.send(msg);
        });
    }
    RED.nodes.registerType("vgm-sample", VGMSampleNode);
};