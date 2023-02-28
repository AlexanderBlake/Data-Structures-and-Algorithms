/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let originalColor = image[sr][sc];
    image[sr][sc] = color;

    if (originalColor != color) {
        if (sr > 0 && image[sr - 1][sc] == originalColor) {
            floodFill(image, sr - 1, sc, color);
        }

        if (sr + 1 < image.length && image[sr + 1][sc] == originalColor) {
            floodFill(image, sr + 1, sc, color);
        }

        if (sc > 0 && image[sr][sc - 1] == originalColor) {
            floodFill(image, sr, sc - 1, color);
        }

        if (sc + 1 < image[sr].length && image[sr][sc + 1] == originalColor) {
            floodFill(image, sr, sc + 1, color);
        }
    }

    return image;
};