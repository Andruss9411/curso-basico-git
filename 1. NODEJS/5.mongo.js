import {MongoClient} from "mongodb";

var uri = "mongodb+srv://andruss9411:Ack3rman9411*@cluster0.oabbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(uri, function(err,client) {
    const collection = client.db("bookshop").collection("user");
    console.log(collection);
    //client.close();
});

