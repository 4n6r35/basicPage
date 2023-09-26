async function importComponent(url, targetElementId) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(targetElementId).innerHTML = html;
  } catch (error) {
    console.error("Error loading component:", error);
  }
}

