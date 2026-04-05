import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_es.artprice.com_tfc', ['https://es.artprice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
