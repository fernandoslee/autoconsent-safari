import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_valpiccola.com_2qb', ['https://www.valpiccola.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
