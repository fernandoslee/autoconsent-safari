import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_campingpfoten.de_fng', ['https://www.campingpfoten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
