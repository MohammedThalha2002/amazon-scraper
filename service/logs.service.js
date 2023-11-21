const Log = require("../model/LogModel");

const postLog = async (req, res) => {
  const data = req.body.data.data;
  try {
    if (Array.isArray(data)) {
      await Log.insertMany(data);
      res.status(200).json({ msg: "Logs uploded successfully", data: data });
    } else {
      let logData = {
        level: data.level,
        message: data.message,
        resourceId: data.resourceId,
        timestamp: data.timestamp,
        traceId: data.traceId,
        spanId: data.spanId,
        commit: data.commit,
        metadata: data.metadata,
      };
      const log = new Log(logData);
      await log.save();
      res.status(200).json({ msg: "Log uploded successfully", data: log });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Failed to upload the log", error: error });
  }
};

const getLogs = async (req, res) => {
  let match = req.body.data.query;
  if (match) {
    match = JSON.parse(match);
  } else {
    match = {};
  }
  console.log(match);

  try {
    const logs = await Log.find(match);

    const meta = {
      total: logs.length,
      status: "success",
    };

    const output = {
      meta: meta,
      data: logs,
    };
    res.send(output);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Failed to upload the log", error: error });
  }
};

module.exports = { postLog, getLogs };
