**Men's Clothing Filter App**

This branch holds components that allows users to filter men's clothing based on categories, clothing items, colors, and sizes. A user can start by selecting a category and then progressively refine their choices.

**Getting Started**

1. Clone the Repository:
   ```shell
   git clone https://github.com/your-username/clothing-filter-app.git
   cd clothing-filter-app
   ```

2. Install Dependencies:
   ```shell
   npm install
   ```

3. Run the Application:
   ```shell
   npm start
   ```

**How It Works**

This application provides a structured approach to filter men's clothing. The following hierarchy is followed:

1. **Categories:**
   - Users start by selecting a category from a list of available categories, such as "All," "Official," "Casual," or "Smart Casual."
   - Clicking on a category button filters clothing based on the chosen category.

2. **Clothing:**
   - After selecting a category, users can further narrow down their choices by choosing specific clothing items.
   - The "All" button allows them to reset their selection.
   - The list of available clothing items is dynamically generated based on the selected category.

3. **Colors:**
   - Once a clothing item is selected, users can choose from a list of available colors for that specific item.
   - The "All Colors" button resets the color selection.
   - The available color options depend on the chosen clothing item.

4. **Sizes:**
   - After selecting a color, users can further refine their choice by selecting a size.
   - The "All Sizes" button resets the size selection.
   - Available size options depend on the chosen color.

**Code Explanation**

The React components and logic for this filtering app are organized as follows:

- `Men`: The main component that manages the state of selected categories, clothing, colors, and sizes.
  - `selectedCategory`, `selectedClothing`, `selectedColor`, and `selectedSize` states store user selections.
  - Functions like `getAvailableClothing`, `getAvailableColors`, and `getAvailableSizes` are used to filter and provide available options based on user selections.
- The categories, clothing items, colors, and sizes are displayed as buttons. Users can click these buttons to make their selections.
- The content dynamically updates based on user choices, providing a hierarchical filtering experience.

**Test Data**

Dummy data was made in the `menData` variable where sample clothing items and their details were added for demonstration purposes. Will be replaced with clothing data to be included in the backend too.
