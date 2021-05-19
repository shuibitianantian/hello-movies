import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";

type PaginationProps = {
  clickPreAction: Function;
  curPage: number;
  totalPage: number;
  clickNextAction: Function;
  closeActions?: Function;
};

export const Pagination = ({
  curPage,
  totalPage,
  clickPreAction,
  clickNextAction,
  closeActions,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <ChevronLeftIcon
        className="pagination-button"
        onClick={() => clickPreAction()}
      />
      {curPage} / {totalPage}
      <ChevronRightIcon
        className="pagination-button"
        onClick={() => clickNextAction()}
      />
      {closeActions === undefined ? null : (
        <CloseIcon
          className="pagination-button"
          onClick={() => closeActions()}
        />
      )}
    </div>
  );
};
