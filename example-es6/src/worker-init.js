var worker = new Worker('worker-init-for-real.js');
var localQueue = semiNative.createMessageQueue(worker, null, {});
var container = semiNative.createContainer(localQueue, document.getElementById('dom-target'));