const fs = require('fs')
// const Sanitizer = require('./Sanitizer')
const Processor = require('./Processor')
// const MessageProcessor = require('./BatchProcessor');
// const ProcessingUtils = require('./ProcessingUtils')

// const sanitizer = new Sanitizer()
const processor = new Processor()
// const utils = new ProcessingUtils()
//
const rawdata = fs.readFileSync('src/files/message_1.json')
const input = JSON.parse(rawdata)
// let clean = sanitizer.prepareMessages(input)
processor.setup(input)
// let messagesOfAUser = utils.getMessagesOfAUser(input, "Lalala").map(message => message.content).join(' ');
// const mp = new MessageProcessor(input, "Lalala");
// const mp = new MessageProcessor(input, "Lalala");
// mp.setup();

