// Solution 1
function MatrixChallenge(strArr) {
  let matrix = strArr.map(row => JSON.parse(row));
  
  if (matrix.length === 0 || matrix[0].length === 0) {
      return "";
  }

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let result = [];

  while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
          result.push(matrix[top][i]);
      }
      top++;

      for (let i = top; i <= bottom; i++) {
          result.push(matrix[i][right]);
      }
      right--;

      if (top <= bottom) {
          for (let i = right; i >= left; i--) {
              result.push(matrix[bottom][i]);
          }
          bottom--;
      }

      if (left <= right) {
          for (let i = bottom; i >= top; i--) {
              result.push(matrix[i][left]);
          }
          left++;
      }
  }

  return result.join(",");
}

console.log({ 'solution 1': MatrixChallenge(["[1, 2]", "[10, 14]"]) }); // Output: 1,2,14,10
console.log({ 'solution 1': MatrixChallenge(["[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"]) }); // Output: 4,5,6,5,2,9,2,4,5,1,1,2

// Solution 2
function MatrixChallenge2(strArr) {
  let result = [];
  let matrix = strArr.map(row => JSON.parse(row));
  
  if (matrix.length === 0 || matrix[0].length === 0) {
      return "";
  }

  
  const spiralOrder = ({ top, bottom, left, right }) => {
      if (top > bottom || left > right) {
          return;
      }

      for (let i = left; i <= right; i++) {
          result.push(matrix[top][i]);
      }

      for (let i = top + 1; i <= bottom; i++) {
          result.push(matrix[i][right]);
      }

      if (top < bottom) {
          for (let i = right - 1; i >= left; i--) {
              result.push(matrix[bottom][i]);
          }
      }

      if (left < right) {
          for (let i = bottom - 1; i > top; i--) {
              result.push(matrix[i][left]);
          }
      }

      // Recursively process the inner matrix
      spiralOrder({
        top: top + 1, 
        bottom: bottom - 1, 
        left: left + 1, 
        right: right - 1
      });
  }

  spiralOrder({
    top: 0, 
    bottom: matrix.length - 1, 
    left: 0, 
    right: matrix[0].length - 1
  });
  
  return result.join(",");
}

console.log({ 'solution 2': MatrixChallenge2(["[1, 2]", "[10, 14]"]) }); // Output: 1,2,14,10
console.log({ 'solution 2': MatrixChallenge2(["[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"]) }); // Output: 4,5,6,5,2,9,2,4,5,1,1,2
