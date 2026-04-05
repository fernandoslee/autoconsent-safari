import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_ebanking2-de.unicreditgroup.eu_9p7',
    [
        'https://corporateportal.unicreditgroup.eu/portal/germany/login?client_id=GET-DE-PRD-01&response_type=code&response_mode=fragment&redirect_uri=https%3A%2F%2Febanking2-de.unicreditgroup.eu%2Fdashboard&code_challenge=pXNPUqge9oP2Pn-kWkwO0qAlJ3r4XbDU8qsQ_ZvW_MU&code_challenge_method=S256&scope=openid',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
