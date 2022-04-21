import { memo } from "react";

export const Picture = memo(({ base, md, lg }) => {
  return (
    <picture>
      <source width='100%' srcSet={lg} media='(min-width: 1000px)' />
      <source width='100%' srcSet={md} media='(min-width: 670px)' />
      <img width='100%' src={base} />
    </picture>
  );
});
