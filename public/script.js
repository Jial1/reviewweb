document.addEventListener("DOMContentLoaded", function () {
  /**
 * Converts a binary array representing an image to a base64-encoded data URL.
 *
 * @param {Uint8Array} binaryArray - The binary array representing the image.
 * @returns {string|null} The base64-encoded data URL of the image, or null if the binary array is empty or an error occurs.
 */
  function getImageSrcFromBinaryArray(binaryArray) {
    try {
      if (binaryArray && binaryArray.length > 0) {
        const chunkSize = 8192; // Adjust the chunk size as needed
        let base64String = '';

        for (let i = 0; i < binaryArray.length; i += chunkSize) {
          const chunk = binaryArray.slice(i, i + chunkSize);
          base64String += String.fromCharCode.apply(null, chunk);
        }

        const finalBase64 = btoa(base64String);
        const imageSrc = 'data:image/jpeg;base64,' + finalBase64; // Adjust the type accordingly
        return imageSrc;
      } else {
        console.error('Binary array is empty.');
        return null;
      }
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }

/**
 * Formats a date string using the specified options.
 *
 * @param {string} date - The date string to be formatted.
 * @returns {string} The formatted date string.
 */
  function formatDate(date) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

/**
 * Renders reviews based on the selected beverage type.
 *
 * @param {Array} reviews - An array of review objects.
 * @param {string} selectedBeverage - The selected beverage type ("all" for all beverages).
 */
  function renderReviews(reviews, selectedBeverage) {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = ""; // Clear existing reviews
    // Sort reviews by date in descending order (most recent first)
    reviews.sort((a, b) => new Date(b.date) - new Date(a.date));

    reviews.forEach((review) => {
      if (selectedBeverage === "all" || selectedBeverage === review.beverageType) {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        const reviewHTML = `
                    <div class="review-header">
                        <span class="beverage-name">${review.beverageType}</span>
                    </div>
                    <div class="rating">${"★".repeat(review.rating)}</div>
                    <div class="review-text">${review.comment}</div>
                    <div class="date">${formatDate(review.createdAt)}</div>
                    
                    <img src='${getImageSrcFromBinaryArray(review.imageData.data.data)}' width = 200/>
                    `;

        reviewElement.innerHTML = reviewHTML;
        reviewsList.appendChild(reviewElement);
      }
    });
  }

  const beverageFilter = document.getElementById("beverage-filter");

  // Event listener for beverage filter changes
  beverageFilter.addEventListener("change", function () {
    const selectedBeverage = beverageFilter.value;

    // Make an AJAX request to fetch reviews for the selected beverage
    fetch(`/api/reviews?beverageType=${selectedBeverage}`)
      .then(response => response.json())
      .then(data => renderReviews(data, selectedBeverage))
      .catch(error => console.error(error));
  });

  // Initial rendering with all reviews
  fetch('/api/reviews')
    .then(response => response.json())
    .then(data => renderReviews(data, 'all'))
    .catch(error => console.error(error));
});