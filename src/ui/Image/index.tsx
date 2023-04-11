interface Props {
  src: string;
  width?: string;
  height?: string;
  alt: string;
}

function Image({ src, alt = "", width, height }: Props) {
  return <img src={src} alt={alt} width={width} height={height} />;
}

export default Image;
