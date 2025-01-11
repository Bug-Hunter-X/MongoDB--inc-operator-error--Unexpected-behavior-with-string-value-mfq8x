# MongoDB $inc Operator Error
This example demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numeric field by a specified value. Attempting to use a string value instead results in unexpected behavior.  The provided solution corrects this by using a numeric value for the increment.

## Bug
The original code incorrectly uses a string ('1') with the $inc operator, leading to a failure to increment the field.

## Solution
The corrected code uses a number (1) to correctly increment the field.