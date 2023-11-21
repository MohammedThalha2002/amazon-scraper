const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  level: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  resourceId: {
    type: String,
    require: true,
  },
  timestamp: {
    type: Date,
    require: true,
  },
  traceId: {
    type: String,
    require: true,
  },
  spanId: {
    type: String,
    require: true,
  },
  commit: {
    type: String,
    require: true,
  },
  metadata: {
    parentResourceId: {
      type: String,
      require: true,
    },
  },
});

const Logs = mongoose.model("Logs", logSchema);

module.exports = Logs;
