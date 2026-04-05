import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_physio-koch.ch_9ak', ['https://www.physio-koch.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
