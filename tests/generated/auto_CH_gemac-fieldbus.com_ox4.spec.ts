import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gemac-fieldbus.com_ox4', ['https://www.gemac-fieldbus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
