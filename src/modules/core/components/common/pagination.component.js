import { range } from "lodash";
import classes from "../../style/scss/pagination.module.scss";

const Pagination = ({ totalItems, pageCount, activePage, onClickPage }) => {
    const totalPages = Math.ceil(totalItems / pageCount);
    const pages = range(1, totalPages + 1, 1);

    if(totalItems < pageCount) return true;

    return (
        <ul className={classes.pagination}>
            {pages.map(page => (
                <li 
                    key={page} 
                    className={page === activePage ? "activePage" : undefined}
                    onClick={() => onClickPage(page)}
                >
                    {page}
                </li>
            ))}
        </ul>
    );
}
 
export default Pagination;