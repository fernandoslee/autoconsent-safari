import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.nothing.tech_7nz', ['https://fr.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
