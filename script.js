const subjectArr = ['The smell', 'The color', 'The sound', 'The space'];
const verb = 'is';
const colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];
const connector = 'and';
const adjArr = ['soft', 'light', 'smooth', 'silky', 'hard', 'slimy', 'metal-like', 'clean', 'disgusting', 'good' , 'bad'];
var finalMsg = '';

const randomIndex = length => {
    return Math.floor(Math.random() * length)
}

const clearMessage = str => {
    finalMsg = '';
}

const createMessage = (sub, color, adj) => {
    if (finalMsg != '') {
        clearMessage(finalMsg);
    }
    finalMsg = sub[randomIndex(sub.length)];
    finalMsg = finalMsg.concat(' ', verb);
    finalMsg = finalMsg.concat(' ', color[randomIndex(color.length)]);
    finalMsg = finalMsg.concat(' ', connector);
    finalMsg = finalMsg.concat(' ', adj[randomIndex(adj.length)]);
    console.log(finalMsg)
    

}

createMessage(subjectArr, colorArr, adjArr);