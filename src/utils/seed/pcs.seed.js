const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://Team1:f46SKDanPaPmcWC@cluster0.higjb.mongodb.net/Ordenadores?retryWrites=true&w=majority";
const pcSchema = require("../../api/pc/pc.model.js");

const pcs = [
    {
        model: "Aero_Master",
        img: "https://res.cloudinary.com/dhp2zuftj/image/upload/v1642165383/pc-photos/Aero_Master_g1mhxa.png",
        price: 830,
        components: [],
    },
    {
        model: "Aero_Pro",
        img: "https://res.cloudinary.com/dhp2zuftj/image/upload/v1642165384/pc-photos/Aero_Pro_zdiiav.png",
        price: 880,
        components: [],
    },
    {
        model: "Aurora_Nova",
        img: "https://res.cloudinary.com/dhp2zuftj/image/upload/v1642165383/pc-photos/aurora_nova_wvghql.png",
        price: 660,
        components: [],
    },
    {
        model: "Minecraft_Elite",
        img: "https://res.cloudinary.com/dhp2zuftj/image/upload/v1642165383/pc-photos/Miecraft_Elite_wt4ttn.png",
        price: 850,
        components: [],
    }
  ];

const PCsDocuments = pcs.map((pc) => new pcSchema(pc));

console.log(mongoDB);

mongoose.connect(mongoDB, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(async () => {

    const allPcs = await pcSchema.find();

    if (allPcs.length) {

      await pcSchema.collection.drop();

    }

}).catch((err) => console.log(`Error makings Pcs: ${err}`))
  
.then(async () => {

    await pcSchema.insertMany(PCsDocuments);

    console.log("The new Pcs can run minecraft");

}).catch((err) => console.log(`Error makings Pcs: ${err}`))
  
.finally(() => mongoose.disconnect());