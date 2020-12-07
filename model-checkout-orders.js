const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let checkoutOrderDocument = new Schema(
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
  { collection: "checkout_orders" }
);

module.exports = mongoose.model("checkout_orders", checkoutOrderDocument);
