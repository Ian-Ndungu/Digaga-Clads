import React, { useState } from 'react';

const SelectedImage = ({  imageUrl, altText, category, availableClothing, onCategoryChange, onClothingChange, onColorChange, onSizeChange}) => 
{
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    onCategoryChange(category); //
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    onCategoryChange(category);
  
    // stores values via array
    const clothingArray = getAvailableClothing.map((item) => item.name);
    const colorArray = getAvailableColor.map();
    const sizeArray = getAvailableSize.map();
  
    // Update clothing, color, and size on user input
    onClothingChange(clothingArray);
    onColorChange(colorArray);
    onSizeChange(sizeArray);
  };
  //creates the filtering method to be applied on the clickable image when clicked

  const imageSource = isHovered ? imageUrl.hover: imageUrl.normal; 
  //switching between hover and normal when user hovers.

  const imageStyles = {
    width: '200px',
    height: '200px',
    cursor: 'pointer',
    transform: isClicked ? 'scale(1.1)' : 'scale(1)', //transformation scale when hovered on. 
    borderRadius: '20%', // soft corners.
    border: isClicked ? '2px solid #3498db' : 'none', //border line to higlight hovered image.
  };
  //image size set-up

  return (
    <div
      onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    > 
    {/* //clickability function on the images// */}
        <img
          src={imageSource} alt={altText} style={imageStyles} 
          // will be interpolated from categories img link
        />
    </div>
  );
};

export default SelectedImage;

/*this component makes the categories 
convert to clickable images that the 
user will switch to the diferent categories*/