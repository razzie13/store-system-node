const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let onlineOrderDocument = new Schema(
  {
    itemCode: {
        type: Number
    },
    itemBrand: {
        type: String
    },
    itemType: {
        type: String
    },
    itemDescription: {
        type: String
    },
    itemPrice: {
        type: Number
    },
    hst: {
        type: Boolean
    }
  },
  { collection: "online_orders" }
);

module.exports = mongoose.model("online_orders", onlineOrderDocument);
