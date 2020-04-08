const collectionName = "rooms";

// function readData(){
//     const messages = [];
    
//     db.collection(collectionName).orderBy("timeStamp").get()
//         .then(querySnapshot=>{
//             querySnapshot.forEach(doc=>{
//                 // messages = [...messages , {senderId: doc.data().senderId , message: doc.data().message}]
//                 console.log(doc.data());
//                 render(doc.data());
//             })
//         })
// }

db.collection(collectionName).orderBy("timeStamp").onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                render(change.doc.data());
            }
        });
    });

// readData();