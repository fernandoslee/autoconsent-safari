import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jepsen-autogruppe.de_jde', ['https://www.jepsen-autogruppe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
