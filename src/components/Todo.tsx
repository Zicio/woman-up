import { ITodo } from "../models/models";
import React, { MouseEvent, useState } from "react";
import moment from "moment";

const Todo: React.FC<{ data: ITodo }> = ({ data }) => {
  const [showDesc, setShowDesc] = useState(false);
  const createdData = data.createdAt.toDate();
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowDesc(!showDesc);
  };

  return (
    <div
      className="w-[300px] box grid grid-col-2 gap-y-[10px]"
      onClick={handleClick}
    >
      <p>{moment(createdData).format("L")}</p>
      <h3 className="col-start-2 font-bold text-right">{data.title}</h3>
      <p className={`${!showDesc && "hidden"} col-span-2`}>
        {data.description}
      </p>
    </div>
  );
};

export default Todo;
