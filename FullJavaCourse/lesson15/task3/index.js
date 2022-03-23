export const createLogger = () => {
  const records = [];

  function warn(text) {
    const memo = {};
    memo.message = text;
    memo.type = "warn";
    memo.dateTime = new Date();

    records.unshift(memo);
  }

  function error(text) {
    const memo = {};
    memo.message = text;
    memo.type = "error";
    memo.dateTime = new Date();
    records.unshift(memo);
  }

  function log(text) {
    const memo = {};
    memo.message = text;
    memo.type = "log";
    memo.dateTime = new Date();
    records.unshift(memo);
  }

  function getRecords(text) {
    if (text) {
      return records.filter((el) => el.type === text);
    }
    return records;
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();
logger.log("User logged in");
logger.warn("User try to restricted page");
logger.log("User logged out");
logger.error("Unexpected error on the site");
logger.getRecords();
logger.getRecords("log");
logger.getRecords("error");
logger.getRecords("warn");
