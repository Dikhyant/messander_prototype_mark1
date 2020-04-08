const db = firebase.firestore();
console.log(db);

db.collection("heros").doc("aurthr").update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
})