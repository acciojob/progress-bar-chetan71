//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const circles = document.querySelectorAll('.circle');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentStep = 1;  // Start at the first step

  // Function to update the progress bar based on the current step
  function updateProgress() {
    circles.forEach((circle, index) => {
      if (index < currentStep) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    // Disable previous button if at the first step
    prevButton.disabled = currentStep === 1;

    // Disable next button if at the last step
    nextButton.disabled = currentStep === circles.length;
  }

  // Event listener for the next button
  nextButton.addEventListener('click', function() {
    if (currentStep < circles.length) {
      currentStep++;
      updateProgress();
    }
  });

  // Event listener for the previous button
  prevButton.addEventListener('click', function() {
    if (currentStep > 1) {
      currentStep--;
      updateProgress();
    }
  });

  // Initialize the progress bar
  updateProgress();
});
