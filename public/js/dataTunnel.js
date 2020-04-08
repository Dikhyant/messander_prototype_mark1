function sendData(data){
    const collectionName = "rooms";
    db.collection(collectionName).add({
        senderId: data.senderId,
        message: data.message,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then( doc=>{
        console.log(doc);
    })
    .catch( error=>{
        console.log("Huston we have a problem = "+error);
    })
}