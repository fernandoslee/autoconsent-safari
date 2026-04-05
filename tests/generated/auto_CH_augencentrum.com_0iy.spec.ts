import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_augencentrum.com_0iy', ['https://augencentrum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
