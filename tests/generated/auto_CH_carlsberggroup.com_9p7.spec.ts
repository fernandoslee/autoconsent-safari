import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_carlsberggroup.com_9p7', ['https://www.carlsberggroup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
