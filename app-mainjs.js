document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'i') {
    event.preventDefault();
    const selection = window.getSelection();
    if (!selection.rangeCount) return; // No selection made

    try {
      const range = selection.getRangeAt(0);
      const selectedText = range.toString().trim();

      if (selectedText.length > 0) {
        // Check if the selection is already italicized
        const parentElement = range.commonAncestorContainer.parentElement;
        if (parentElement.tagName === 'SPAN' && parentElement.classList.contains('italic')) {
          // Remove the italic class
          parentElement.classList.remove('italic');
        } else {
          // Apply the italic class
          const span = document.createElement('span');
          span.classList.add('italic');
          range.surroundContents(span);
        }
      }
    } catch (error) {
      console.error('Error toggling italic formatting:', error);
    }
  }
});
