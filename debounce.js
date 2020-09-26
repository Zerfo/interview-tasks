/**
 * Необходимо реализовать функцию debounce(f, ms)
 */

function debounce(f, ms) {
  let isCooldown = false;

  return () => {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };
}
