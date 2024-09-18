import katex from 'katex';

interface MathTextProps {
    text: string;
};

const katexString = (text: string): string => {
  return katex.renderToString(text, {
    throwOnError: false,
    displayMode: true,
  });
};

export default function MathText(props: MathTextProps) {
  return (
    <div dangerouslySetInnerHTML={{ __html: katexString(props.text) }} />
  )
};
