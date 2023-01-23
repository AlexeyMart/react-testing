# React-Testing

### To find a single element:

- getBy..
- queryBy..
- findBy..

### To find a multiple elements:

- getAllBy..
- queryAllBy..
- findAllBy..

### suffix: Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title, TestId

### Priority orders for queries

1. getByRole
2. getByLabelText (especially for form fields)
3. getByPlaceholderText
4. getByText (especially outside of forms)
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

### queryBy, queryAllBy + any suffix (useful if element is not present in the DOM)

queryBy returns node | null
queryAllAby returns node[] | empty array []

### findBy, findAllBy + any suffix (async)

findBy returns a Promise which resolves when element is found (defaultTimeout rejection = 1000ms)
findAllBy return a Promise which resolves to array when any elements are found (defaultTimeout rejection = 1000ms)

### Pointer interactions

click, dblClick, tripleClick, hover, unhover
