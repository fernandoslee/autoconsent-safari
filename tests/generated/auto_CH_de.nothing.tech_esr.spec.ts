import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.nothing.tech_esr', ['https://de.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
