import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_memoriahistorica.org.es_met', ['https://memoriahistorica.org.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
