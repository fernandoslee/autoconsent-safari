import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_valuta.exchange_x2m', ['https://valuta.exchange/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
