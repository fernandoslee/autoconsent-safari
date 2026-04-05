import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_caminitodelrey.info_hdl', ['https://www.caminitodelrey.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
