import './category-item.style.scss'

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  
  return (
    <div className="category-container">
      <div className="background-image" 
        style={{background: `url(${imageUrl})`}}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};
export default CategoryItem;
