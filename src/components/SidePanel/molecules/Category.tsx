type CategoryProps = {
    title?: string,
    children: any
}

const Category = ({title, children}: CategoryProps) => {
  return (
    <div className="side_panel_category">
        <span>{title}</span>
      <ul>
        {children}
      </ul>
    </div>
  );
};

export default Category;
