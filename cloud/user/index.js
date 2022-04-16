const cloud = require('wx-server-sdk')
const getOpenId = require('./getOpenId/index.js');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  switch (event.type) {
    case 'getOpenId':
      return await getOpenId.main(event, context);
  }
}

