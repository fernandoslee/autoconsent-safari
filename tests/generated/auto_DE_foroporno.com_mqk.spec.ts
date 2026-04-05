import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_foroporno.com_mqk', ['https://www.foroporno.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
