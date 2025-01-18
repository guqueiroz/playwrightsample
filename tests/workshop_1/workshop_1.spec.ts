import {test} from 'playwright/test';

test.only('Basic navigation', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    await page.getByRole('link', {name: 'Get free trial'}).click();
    await page.waitForTimeout(3000);
    await page.reload();
})

test('Interacting with elements', async ({page})=>{
    await page.goto('https://gitlab.com/-/trial_registrations/new?glm_source=about.gitlab.com/&glm_content=default-saas-trial');
    await page.click('#onetrust-accept-btn-handler');
    //await page.locator('[data-testid="new-user-first-name-field"]').fill('Gzera');
    await page.getByTestId('new-user-first-name-field').fill('GordoG');
    await page.getByTestId('new-user-last-name-field').fill('Original');
})