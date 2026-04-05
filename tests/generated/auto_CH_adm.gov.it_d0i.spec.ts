import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_adm.gov.it_d0i', ['https://www.adm.gov.it/portale/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
