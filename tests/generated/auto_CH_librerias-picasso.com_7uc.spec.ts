import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_librerias-picasso.com_7uc', ['https://www.librerias-picasso.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
