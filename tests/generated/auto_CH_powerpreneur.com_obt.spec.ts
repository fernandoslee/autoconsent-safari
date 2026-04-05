import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_powerpreneur.com_obt', ['https://www.powerpreneur.com/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
