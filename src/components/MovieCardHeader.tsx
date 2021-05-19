import ReactDOM from "react-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../css/movieCardHeader.css";

const COLORS = [
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

type MovieHeaderProps = {
  popularity: number;
  title: string;
  subtitle: string;
  genres: object[];
  action: Function;
};

export const MovieCardHeader = ({
  popularity,
  title,
  subtitle,
  action,
  genres,
}: MovieHeaderProps) => {
  const renderGenres = () => {
    if (genres === undefined) return;
    return genres.map((item: any) => {
      return (
        <span
          key={item.id}
          style={{ backgroundColor: COLORS[item.id % COLORS.length] }}
        >
          {item.name}
        </span>
      );
    });
  };

  const modal = document.getElementById("trailer-modal");
  const renderTrailer = () => {
    // ReactDOM.createPortal()
  };

  return (
    <>
      <div className="movie-card-popularity">
        {Number.isNaN(popularity) || popularity === undefined
          ? 0
          : popularity.toFixed(1)}
      </div>
      <div className="movie-card-header-title">
        <div>{title === "" ? "No title" : title}</div>
        <div>{subtitle === "" ? "No release date" : subtitle}</div>
        <div className="movie-card-genres">{renderGenres()}</div>
      </div>
      <div className="movie-card-more" onClick={() => action()}>
        <MoreVertIcon />
      </div>
    </>
  );
};
