const mongoose = require("mongoose");

const docketSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        },
        noOfHrs: {
            type: Number,
            required: true
        },
        ratePerHr: {
            type: String,
            required: true
        },
        supplierName: {
            type: String,
            required: true
        },
        purchaseOrder: {
            type: String,
            required: true
        },
    }, {
    timestamps: true
    },
    { versionKey: false }
);

const Docket = mongoose.model("Docket", docketSchema);
module.exports = Docket;