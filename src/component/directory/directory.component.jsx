import CategoryItem from '..//category/category-item.component'
import './directory.style.scss'

const Directory = ({catogories})=>{
    return (
        <div className="directory-container">
          {catogories.map((category)=>(
            <CategoryItem key={category.id} category={category}/>
          ))}
        </div>
      );
}
export default Directory;