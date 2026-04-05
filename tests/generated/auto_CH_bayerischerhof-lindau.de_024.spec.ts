import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bayerischerhof-lindau.de_024', ['https://www.bayerischerhof-lindau.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
