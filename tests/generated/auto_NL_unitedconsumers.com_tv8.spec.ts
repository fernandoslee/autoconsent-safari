import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_unitedconsumers.com_tv8', ['https://www.unitedconsumers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
