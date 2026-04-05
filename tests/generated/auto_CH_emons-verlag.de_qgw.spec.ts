import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_emons-verlag.de_qgw', ['https://emons-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
