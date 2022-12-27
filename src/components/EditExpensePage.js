import { useParams,useSearchParams } from "react-router-dom";

const EditExpensePage = (props) => {
  let { expenseId } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  
  return <div>Editing the expense of id {expenseId}.</div>;
};

export default EditExpensePage;
