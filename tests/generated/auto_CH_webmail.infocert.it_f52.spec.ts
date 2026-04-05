import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_webmail.infocert.it_f52', ['https://webmail.infocert.it/legalmail/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
