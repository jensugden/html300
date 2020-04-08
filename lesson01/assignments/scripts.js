// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input'),
        submit = $('.submit'),
        resultSum = $('.sum');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          data.push(num);
          // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
          const sum = data.reduce((acc, curr) => acc + curr);
          // Add our new total to the page
          resultSum.text(sum);
          // Reset the input value to nothing
          input.val('');
        }
    });
});

$(function () {
    // Set up some data and variables
    const data = [10, 15, 20, 25, 50, 65, 200],
        input = $('.input2'),
        submit = $('.submit2'),
        resultSum = $('.sum2');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          //data.push(num);
          // Use filter to filter our array of numbers greater than the input
          const sum = data.filter(element => element >num);
          // post our new total to the page
          resultSum.text(sum);
          // Reset the input value to nothing
          input.val('');
        }
    });
});

$(function () {
    // Set up some data and variables
    const data = [2, 4, 6, 8],
        input = $('.input3'),
        submit = $('.submit3'),
        resultSum = $('.sum3');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          //data.push(num);
          // Use map to multiply input times 2
          const sum = data.map(element => element * num);
          // post our new total to the page
          resultSum.text(sum);
          // Reset the input value to nothing
          input.val('');
        }
    });
});

$(function () {
    // Set up some data and variables
    const data = [2, 4, 6, 8],
        input = $('.input4'),
        submit = $('.submit4'),
        resultSum = $('.sum4');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          //data.push(num);
          // Use map to subtract value from array total
          const sum = data.map(element => element - num);
          // post our new total to the page
          resultSum.text(sum);
          // Reset the input value to nothing
          input.val('');
        }
    });
});
