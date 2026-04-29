/*
step by step process to test file upload functionality

Launch the URL

Identify the file upload element on the page
use the setInputFiles ("path of th file") method to upload the file to the file input element
Verify that the files have been uploaded or not
*/

import { test, expect } from '@playwright/test';
import path from 'path';

test("File Uploads Handling", async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    //console.log(__dirname) //C:\Trainings\Playwright_Training\Playwright_Project\tests

    const filePath1 = path.join(__dirname, "../testdata/Classic.PNG")
    const filePath2 = path.join(__dirname, "../testdata/IMG_3996.JPG")

    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    //await page.locator("#filesToUpload").setInputFiles(["C:\\Trainings\\Playwright_Training\\Playwright_Project\\testdata\\Classic.PNG",
    //     "C:\\Trainings\\Playwright_Training\\Playwright_Project\\testdata\\IMG_3996.JPG"])
    await expect(page.locator("#fileList li").first()).toContainText("Classic.PNG")
    await expect(page.locator("#fileList li").last()).toContainText("IMG_3996.JPG")
    await page.waitForTimeout(5000)

})