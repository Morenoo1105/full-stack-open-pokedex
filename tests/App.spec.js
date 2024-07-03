import { test, expect } from "@playwright/test";

test("front page can be opened", async ({ page }) => {
  await page.goto("");
  await expect(page.getByText("ivysaur")).toBeVisible();
  await expect(
    page.getByText(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    )
  ).toBeVisible();
});

test("ivysaur can be navigated to", async ({ page }) => {
  await page.goto("");
  await page.click("text=ivysaur");
  await expect(page.locator("text=chlorophyll")).toBeVisible();
});
