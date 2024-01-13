function createRipple(event) {
    const button = event.currentTarget;

    // Get button dimensions
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    // Calculate click coordinates
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // Create ripple element
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Append ripple to button
    button.appendChild(ripple);

    // Remove ripple after animation
    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });
}



