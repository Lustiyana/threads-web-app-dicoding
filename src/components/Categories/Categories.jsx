import React from "react";

const tags = ['tags1', 'tags2', 'tags3']

const Categories = () => {
  return (
    <div className="p-12 fixed w-1/4 h-screen top-0 right-0">
      <h3 className="mb-4">Categories</h3>
      <div className="flex gap-2">
        {tags.map((tag, index)=>(
          <div key={index} className="px-4 py-1 mb-4 text-sm border rounded-full">#{tag}</div>

        ))}
      </div>
    </div>
  );
};

export default Categories;
