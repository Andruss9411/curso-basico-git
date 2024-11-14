import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

class DataAcces{
    constructor(){
        if(!DataAcces.instance){
            this.uri = process.env.URL_DATABASE;
            this.client = new MongoClient(this.uri);
            this.dataBaseName = process.env.DATA_BASE_NAME;
            const db = this.client.db(this.dataBaseName);
            DataAcces.instance = this;
        }
        return DataAcces.instance;
    }

    async connect (){
        try {
            await this.client.connect();
            console.log("Conectado a la base de datos ...");
        } catch (error){
             console.error("Error al conectarse a la base de datos: ", error);
        }
        return db;
    }   

    async findAll(collection){
        const collection = this.db.collection(collection);
        const users = await collection.find().toArray();
        return users;
      } 
      async findById(){
 
      }     

      async insertOne(db, body){
        const collection = this.db.collection("user");
        const query = await collection.insertOne(body);
        return query;
      }      
      async updateOne(db, id, body){
        const collection = this.db.collection("user");
        const query = await collection.updateOne(
            {_id: new ObjectId(id)},
            { $set: body});
        return query;
      }      
      async deleteOne(db,id){
        const collection = db.collection("user");
        const query = await collection.deleteOne({_id: new ObjectId(id)});
        return query;
      }  
}

export default DataAcces;