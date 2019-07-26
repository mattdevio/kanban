const config = require('./util/config');
const kanban = require('./lib/kanban');
const logger = require('./util/logger');

kanban()
  .listen(config.env.PORT, () => {
    logger.info(`Server started: listening on port ${config.env.PORT}`);
  });