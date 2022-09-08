const { override, useBabelRc, addLessLoader } = require('customize-cra');

module.exports = override(
    useBabelRc(),
    addLessLoader({ modifyVars: { '@primary-color': '#fff' }, javascriptEnabled: true }),
);
