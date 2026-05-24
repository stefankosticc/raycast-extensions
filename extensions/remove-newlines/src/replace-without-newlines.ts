import { closeMainWindow, getSelectedText, Clipboard, showHUD } from "@raycast/api";

export default async function Command() {
  try {
    const selectedText = await getSelectedText();

    const cleaned = selectedText.replace(/\s*\n\s*/g, " ").trim();

    await closeMainWindow();
    await Clipboard.paste(cleaned);
    await showHUD("🔁 Text replaced");
  } catch {
    await showHUD("⚠️ No text selected");
  }
}
