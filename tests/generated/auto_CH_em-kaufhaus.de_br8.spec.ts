import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_em-kaufhaus.de_br8', ['https://www.em-kaufhaus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
