// @ts-check
const { test, expect } = require("@playwright/test")

test("has title", async ({ page }) => {
  await page.goto('http://localhost:5173')

  expect(page.locator('tag=h1').getByText('hi!')).toBeTruthy()

  await expect(page).toHaveTitle("Vite + React")
})