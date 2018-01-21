var MongoClient=require('mongodb').MongoClient;

exports.createConnection=function(){
  MongoClient.connect("mongodb://giri:giri123@ds019123.mlab.com:19123/projector").then(function(client){
    console.log("Connected to mongodb");
    exports.database=client.db("projector");
    //console.log(database);
  });

}
