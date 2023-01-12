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
