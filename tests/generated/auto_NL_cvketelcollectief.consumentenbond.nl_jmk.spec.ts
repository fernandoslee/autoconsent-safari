import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cvketelcollectief.consumentenbond.nl_jmk', ['https://cvketelcollectief.consumentenbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
