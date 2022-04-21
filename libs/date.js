import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {" "}
      {format(date, "Y/MM/dd ", { locale: ja })}
    </time>
  );
}
