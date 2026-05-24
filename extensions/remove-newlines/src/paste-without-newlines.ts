import { Clipboard, showHUD } from "@raycast/api";

export default async function Command() {
  try {
    const clipboardText = await Clipboard.readText();

    if (!clipboardText) {
      await showHUD("⚠️ Error: No text found in clipboard");
      return;
    }

    const cleaned = clipboardText.replace(/\s*\n\s*/g, " ").trim();

    await Clipboard.paste(cleaned);
    await showHUD("✅ Newlines removed");
  } catch {
    await showHUD("⚠️ Error: Something went wrong");
  }
}
