```javascript
//Incorrect usage of $inc operator for updating a field in MongoDB
db.collection('myCollection').updateOne({fieldName: 'someValue'}, {$inc: {fieldToUpdate: '1'}});
```