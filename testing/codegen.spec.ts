/*
Codegen - Code Generation in Python, .NET, Java, Javscript & Typescript

npx playwright codegen - to open codegen tool and the browser from 'Terminal'

    - start & stop the recording
    - generate the locator
    - write the assertion for visibilty of an element
    - to contain a text
    - assert value

npx playwright codegen "URL" - provide the URL of the page for which code needs to generate

1. Handle multiple windows
2. frames

*/

import { test, expect } from '@playwright/test';
import {Employees} from '../Typescript/Employees'

test('Test window', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await expect(page.getByRole('button', { name: 'click' })).toBeVisible();
  await expect(page.getByRole('paragraph')).toContainText('"_blank"');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('textbox', { name: 'Email id for Sign Up' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Email id for Sign Up' }).click();
  await page.getByRole('textbox', { name: 'Email id for Sign Up' }).fill('Testing');
  await page.getByRole('textbox', { name: 'Email id for Sign Up' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toHaveValue('Testing');
});

test('Test Frames', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('Testing');
  await expect(page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox')).toHaveValue('Testing');
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').fill('Nested');
});